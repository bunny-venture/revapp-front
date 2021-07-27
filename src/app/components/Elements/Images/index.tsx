import React from 'react';
import styled from 'styled-components';
import MailSentSVG from '../../../../assets/images/Mail_Sent.svg';
import ActivatedAccountSVG from '../../../../assets/images/Activated_Account.svg';
import ReviewImageSVG from '../../../../assets/images/Review.svg';
import SecureLoginSVG from '../../../../assets/images/Secure_Login.svg';

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

export function ReviewImage() {
  return <StyledReviewSVG src={ReviewImageSVG} alt="Review Picture" />;
}

export function SecureLoginImage() {
  return (
    <StyledSecureLoginSVG src={SecureLoginSVG} alt="Secure Login Picture" />
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

const StyledReviewSVG = styled.img`
  width: 20rem;
  height: 20rem;
  position: fixed;
  bottom: -3.6em;
  left: -1rem;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 14rem;
    height: 10rem;
    bottom: -0.5rem;
  }

  @media (max-width: 795px) {
    display: none;
  }
`;

const StyledSecureLoginSVG = styled.img`
  width: 20rem;
  height: 20rem;
  position: fixed;
  bottom: -4.9rem;
  right: -1.1rem;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 14rem;
    height: 10rem;
    bottom: -1.4rem;
  }

  @media (max-width: 795px) {
    display: none;
  }
`;
