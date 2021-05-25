import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2223);
`;

export const AccountContainer = styled.View`
    padding: ${props => props.theme.space[4]};
    margin-top: ${props => props.theme.space[2]};
    background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    padding: ${props => props.theme.space[1]};
`;