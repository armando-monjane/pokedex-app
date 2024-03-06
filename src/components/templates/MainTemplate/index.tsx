import React from "react";

import IconButton from "@mui/material/IconButton";

import { ArrowBack } from "@mui/icons-material";

import * as S from "./styles";
import { Typography } from "@mui/material";
import Navbar from "@components/molecules/Navbar";
import { RootState, useAppSelector } from "@redux/store";
import Loader from "@components/atoms/Loader";
import { FeedbacksState } from "@redux/features/global/feedback-slice";

interface MainTemplateProps {
    children?: React.ReactNode;
    withPadding?: boolean;
    title?: string;
    withBackButton?: boolean;
    noPaddingMobile?: boolean;
    noTitleMobile?: boolean;
    onGoBack?: () => void;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
    children,
    title,
    withBackButton,
    onGoBack,
}) => {
    const { isLoading } = useAppSelector((state: RootState) => state.feedback as FeedbacksState);

    return (
        <>
            <S.Container>
                <S.BoxInline>
                    {withBackButton && (
                        <IconButton onClick={onGoBack}>
                            <ArrowBack />
                        </IconButton>
                    )}
                    {title && <Typography variant="h1">{title}</Typography>}
                    <Navbar />
                </S.BoxInline>
                {children && children}
            </S.Container>
            {isLoading && <Loader />}
        </>
    );
};

export default MainTemplate;
