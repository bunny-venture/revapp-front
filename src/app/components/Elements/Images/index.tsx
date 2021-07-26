import React from 'react';
import styled from 'styled-components';
import MailSentSVG from '../../../../assets/images/Mail_Sent.svg';
import ActivatedAccountSVG from '../../../../assets/images/Activated_Account.svg';

export function VerifyEmailAddressImage() {
  return <StyledMailSentSVG src={MailSentSVG} alt="Verify Email Picture" />;
}

export function ActivatedAccountImage() {
  return (
    <StyledActivatedEmailSVG
      src={ActivatedAccountSVG}
      alt="Activated Account Picture"
    />
  );
}

const StyledMailSentSVG = styled.img`
  width: 10rem;
  height: 8rem;
`;

const StyledActivatedEmailSVG = styled.img`
  width: 12rem;
  height: 8rem;
`;
