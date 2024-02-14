"use client"

import styled from 'styled-components';

type SectionProps = {
    $url?: any;
}

export const MainMenuContent = styled.div<SectionProps>`
  background-color: rgba(0,0,0,0.9);
    ${({ $url }) => $url && `
        background-image: url(${$url})
    `}
`;



export const SectionBg = styled.section<SectionProps>`
    background-attachment: fixed;
    background-position: center;
    overflow: hidden;
    position: relative;
    background-size: cover;

    ${({ $url }) => $url && `
        background-image: url(${$url})
    `}

    
`;