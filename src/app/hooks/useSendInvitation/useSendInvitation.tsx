import React, {useMemo} from 'react';
import {Transition} from "react-transition-group";
import {Grid, Modal, ModalDialog} from "@mui/joy";
import styled from "styled-components";
import {UserResponse} from "@/types/user/user";

type UseSendInvitationOutput = {
    modal: React.ReactElement;
    setOpen: (val: boolean) => void;
}

type UseSendInvitationProps = {
    user?: UserResponse;
    guestUser?: string;
}

export function useSendInvitation({ user, guestUser }: UseSendInvitationProps): UseSendInvitationOutput {
    const [open, setOpen] = React.useState<boolean>(false);
    
    const userInfo = useMemo(() => {
        if (user?.name) return user?.name;

        return guestUser ?? 'Mr & Mrs';
    }, [guestUser, user]);
    
    const modal = (
        <Transition in={open} timeout={400}>
            {(state: string) => (
                <StyledModal
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
                                entering: {opacity: 1},
                                entered: {opacity: 1},
                            }[state],
                        }}
                    >
                        <Grid container justifyContent='center'>
                            <Grid xs={12}>
                                <div className="gla_invitation_i gla_image_bck"
                                     data-image="images/invitations/inv_i/back3.jpg">
                                    
                                    <p><img src="/images/invitations/inv_i/save_the_date.gif" alt=""
                                            height="240"/></p>
                                    <br/><br/>
                                    <h2>{userInfo}</h2>
                                    <h4>31 March</h4>
                                    <h4>Riverside Palace, HCM City</h4>
                                </div>
                            </Grid>
                        </Grid>
                    </StyledModalDialog>
                </StyledModal>
            )}
        </Transition>
    );
    
    return {
        modal,
        setOpen
    }
}

const StyledModalDialog = styled(ModalDialog)`
    padding: 0rem !important;
    border-radius: 20px !important;
`;

const StyledModal = styled(Modal)`
    border-radius: 20px !important;
`;