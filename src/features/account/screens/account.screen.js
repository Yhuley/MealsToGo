import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import {AccountBackground, AccountContainer, AccountCover, AuthButton} from "../components/account.styles";

const AccountScreen = ({ navigation }) => {

    return (
        <AccountBackground>
            <AccountCover/>
            <AccountContainer>
                <AuthButton
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Log In
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="account-plus"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
}

export default AccountScreen;