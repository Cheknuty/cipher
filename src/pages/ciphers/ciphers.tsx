import { Container } from "../../common/container/container";
import { CiphersItem, CiphersList, CiphersWrapper } from "./ciphers.style";

export function Ciphers() {
    return (
        <CiphersWrapper>
            <Container>
                <CiphersList>
                    <CiphersItem>
                        symmetric key algorithms
                    </CiphersItem>
                    <CiphersItem>
                        asymmetric key algorithms
                    </CiphersItem>
                    <CiphersItem>
                        block ciphers
                    </CiphersItem>
                    <CiphersItem>
                        stream ciphers
                    </CiphersItem>
                </CiphersList>
            </Container>
        </CiphersWrapper>
    )
}