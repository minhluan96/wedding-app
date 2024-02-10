import {DialogContent, DialogTitle, Grid, Modal, ModalDialog, Textarea, Button} from "@mui/joy";
import React, {useCallback} from "react";
import styled from 'styled-components';
import {Transition} from "react-transition-group";
import {useGetUserFromQueryParams} from "@/app/hooks/useGetUserFromQueryParams/useGetUserFromQueryParams";
import {useSubmitResponse} from "@/app/hooks/useSubmitResponse/useSubmitResponse";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

type UseSendWishesModalOutput = {
    modal: React.ReactElement;
    setOpen: (val: boolean) => void;
}

type UseSendWishesModalProps = {
    guestUser?: string;
}
export function useSendWishesModal({ guestUser }: UseSendWishesModalProps): UseSendWishesModalOutput {
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const [open, setOpen] = React.useState<boolean>(false);
    const { user } = useGetUserFromQueryParams();
    const { submit } = useSubmitResponse();
    
    const onSubmitClick = useCallback(async (data: string) => {
        if (!executeRecaptcha) return;
        const token = await executeRecaptcha('REJECT_INVITATION');
        const formBody = {
            from: guestUser,
            blessings: data
        };

        await submit({
            token,
            userId: user?.id,
            canCome: false,
            data: JSON.stringify(formBody)
        });
        
        setOpen(false);
    }, [user, guestUser, executeRecaptcha]);
    
    const modal = (
        <Transition in={open} timeout={400}>
            {(state: string) => (
                <Modal
                    keepMounted
                    open={!['exited', 'exiting'].includes(state)}
                    onClose={() => setOpen(false)}
                    slotProps={{
                        backdrop: {
                            sx: {
                                opacity: 0,
                                backdropFilter: 'none',
                                transition: `opacity 400ms, backdrop-filter 400ms`,
                                ...{
                                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                }[state],
                            },
                        },
                    }}
                    sx={{
                        visibility: state === 'exited' ? 'hidden' : 'visible',
                    }}
                >
                    <StyledModalDialog
                        sx={{
                            opacity: 0,
                            transition: `opacity 300ms`,
                            ...{
                                entering: { opacity: 1 },
                                entered: { opacity: 1 },
                            }[state],
                        }}
                    >
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid xs={6}>
                                <StyledDialogTitle>
                                    Send wishes
                                </StyledDialogTitle>
                            </Grid>
                            
                            <Grid xs={12}>
                                <StyledDialogContent>
                                    <p>While we deeply regret that some of you won’t be able to join us on our special
                                        day, we appreciate your warm wishes and support. If you’d like to leave a
                                        message or share your blessings, please feel free to do so below. Your kind
                                        words mean the world to us</p>
                                </StyledDialogContent>
                            </Grid>
                            
                            <Grid xs={12}>
                                <form
                                    onSubmit={async (event) => {
                                        event.preventDefault();
                                        const formData = new FormData(event.currentTarget);
                                        const formJson = Object.fromEntries((formData as any).entries());
                                        await onSubmitClick(formJson?.['form']);
                                    }}
                                >
                                    <StyledFormContent>
                                        <Textarea
                                            name='form'
                                            placeholder="Share your blessings here"
                                            required
                                            variant='soft'
                                            sx={{ mb: 10 }}
                                            minRows={10}
                                            maxRows={14}
                                            slotProps={{ textarea: { maxLength: 2000 } }}
                                        />
                                        <Button
                                            size='lg'
                                            color='warning'
                                            variant='soft'
                                            type='submit'
                                        >
                                            Send
                                        </Button>
                                    </StyledFormContent>
                                    
                                </form>
                            </Grid>
                        </Grid>
                    
                    
                    </StyledModalDialog>
                </Modal>
                )}
        </Transition>
    );
    
    return {
        modal,
        setOpen
    }
}

const StyledDialogTitle = styled(DialogTitle)`
    text-align: center;
    justify-content: center;

    margin-bottom: 16px !important;
`;

const StyledDialogContent = styled(DialogContent)`
    text-align: center;
    justify-content: center;
    
    font-size: 16px;
`;

const StyledModalDialog = styled(ModalDialog)`
    padding: 4rem 6rem !important;
`;

const StyledFormContent = styled.div`
    
    textarea {
        padding: 16px;
        font-size: 16px !important;
    }
    
    button {
        min-height: 4rem;
        font-size: 16px;
        width: 100%;
    }
    
`;