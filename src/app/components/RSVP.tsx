import {Button, Grid, Input} from '@mui/joy';
import React, {useCallback, useMemo, useState} from 'react';
import styled from "styled-components";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {useSendWishesModal} from "@/app/hooks/useSendWishesModal/useSendWishesModal";
import {useSendInvitation} from "@/app/hooks/useSendInvitation/useSendInvitation";
import {useGetUserFromQueryParams} from "@/app/hooks/useGetUserFromQueryParams/useGetUserFromQueryParams";
import {useSubmitResponse} from "@/app/hooks/useSubmitResponse/useSubmitResponse";
import {useGetUserResponse} from "@/app/hooks/useGetUserResponse/useGetUserResponse";
import { RSVPOption } from '@/types/response/response';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {useTranslations} from "next-intl";

const PAYMENT_URL = {
    MOMO: 'https://me.momo.vn/QDI6u5UyFmiyTlFpukTe',
    BINANCE: 'https://s.binance.com/fEdZiTMc'
}

export default function RSVP(): JSX.Element {
    const t = useTranslations('RSVP');
    
    const { user } = useGetUserFromQueryParams();
    const userResponse = useGetUserResponse();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [selected, setSelected] = useState<RSVPOption | null>(userResponse);
    const [guestUser, setGuestUser] = useState('');
    
    const { modal: unableToAttendModal, setOpen: setSendWishesModalOpen } = useSendWishesModal({ guestUser });
    const { modal: invitationModal, setOpen: setInvitationModalOpen } = useSendInvitation({ user, guestUser });
    const { submit } = useSubmitResponse();
    
    const onButtonClick = useCallback((type: RSVPOption) => {
        if (type === selected) {
            return setSelected(null);
        }
        setSelected(type)
    }, [selected]);
    
    const isYes = useMemo(() => selected === RSVPOption.YES, [selected]);
    
    const isNo = useMemo(() => selected === RSVPOption.NO, [selected]);
    
    const onLinkClick = useCallback((link: string) => {
        window.open(link);
    }, [])
    
    
    const onSubmit = useCallback(async (userData: string) => {
        if (!selected) return;
        if (isNo) return setSendWishesModalOpen(true);
        if (!executeRecaptcha) return;

        const token = await executeRecaptcha('SUBMIT_SUCCESS');
        setInvitationModalOpen(true);

        const formData = {
            from: user?.name ?? userData
        };

        await submit({
            token,
            userId: user?.id,
            canCome: isYes,
            data: JSON.stringify(formData),
        });
    }, [selected, isNo, user, isYes, executeRecaptcha]);
    
    return !!executeRecaptcha ? (
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData as any).entries());
                const username = formJson?.['username'];
                
                setGuestUser(username);
                await onSubmit(username);
            }}
        >
            <Grid container spacing={2} justifyContent='center'>
                <Grid xs={12}>
                    <p>{t('delightedMessage')}<br />{t('acceptBy')}</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent='center'>
                <Grid xs={12}>
                    {!!user?.name ? (
                        <h3>{t("nameData", { name: user.name })}</h3>
                    ) : (
                        <InputWrapper>
                            <Input required name='username' variant='soft' color='neutral' placeholder={t('namePlaceholder')} />
                        </InputWrapper>
                    )}
                    
                </Grid>
            </Grid>
      
            <Grid container justifyContent='center'>
                <Grid xs={6}>
                    <SelectionButton
                        size='lg'
                        variant={isYes ? 'solid' : 'outlined'}
                        color='success'
                        startDecorator={<SentimentVerySatisfiedIcon sx={{ fontSize: 32 }} />}
                        onClick={() => onButtonClick(RSVPOption.YES)}
                    >
                        <Text>
                            <h3>{t('acceptButton')}</h3>
                        </Text>
                    </SelectionButton>
                </Grid>
                <Grid xs={6}>
                    <SelectionButton
                        size='lg'
                        variant={isNo ? 'solid' : 'outlined'}
                        color='danger'
                        startDecorator={<SentimentVeryDissatisfiedIcon sx={{ fontSize: 32 }} />}
                        onClick={() => onButtonClick(RSVPOption.NO)}
                    >
                        <Text>
                            <h3>{t('cancelButton')}</h3>
                        </Text>
                    </SelectionButton>
                </Grid>
                
            </Grid>
            <br />
            <Grid container spacing={2} justifyContent='center'>
                <Grid xs={12}>
                    <SubmitButton
                        size='lg'
                        variant='soft'
                        color='warning'
                        type='submit'
                    >
                        <Text>
                            <h4>{t('sendFeedback')}</h4>
                        </Text>
                    </SubmitButton>
                </Grid>
            </Grid>
            {unableToAttendModal}
            {invitationModal}
            <br />
            <Grid container spacing={2} justifyContent='center'>
                <Grid xs={12}>
                    <h4>{t('donationMessage')}</h4>
                </Grid>
                <Grid xs={6}>
                    <p onClick={() => onLinkClick(PAYMENT_URL.MOMO)}><StyledImg $size={250} src="/images/QR_payment.jpeg" alt="" /></p>
                </Grid>
                <Grid xs={6}>
                    <p onClick={() => onLinkClick(PAYMENT_URL.BINANCE)}><StyledImg $size={260} src="/images/binance_QR.jpeg" alt=""/></p>
                </Grid>
            </Grid>
        </form>
    ) : <></>;
}

export const SubmitButton = styled(Button)`
    height: 8rem;
    width: 90%;
`;

export const SelectionButton = styled(Button)`
    height: 8rem;
    width: 80%;
    border-width: 2px !important;
`;

export const Text = styled.span`
    font-size: 2rem;
    font-weight: 400;
    
    & > h3 {
        margin: auto;
        font-size: 24px;
    }
`;

export const StyledImg = styled.img<{ $size?: number }>`
    width:  ${({ $size }) => $size ?? 120}px;
    height: ${({ $size }) => $size ?? 120}px !important;
    object-fit: fill;
    cursor: pointer;
`;

export const InputWrapper = styled.div`
    padding: 0 16px 32px 16px;
    margin: 0 20px;

    input {
        padding: 16px;
        font-size: 16px !important;
        margin: auto;
    }
`;