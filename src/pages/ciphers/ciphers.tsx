import { Container } from "../../common/container/container";
import { useAppSelector } from "../../redux/hooks";
import { CiphersItem, CiphersItemBox, CiphersItemDesc, CiphersItemLogo, CiphersItemLogoIcon, CiphersItemLogoList, CiphersItemLogoTitle, CiphersItemTitle, CiphersList, CiphersWrapper } from "./ciphers.style";
import iMessage from "../../assets/img/IMessage.png"
import Signal from "../../assets/img/signal.png"
import WhatsApp from "../../assets/img/whatsApp.svg"
import { Icon5 } from "../../common/icon5/icon5";
import { Icon6 } from "../../common/icon6/icon6";
import { ButtonPrimary } from "../../components/buttonPrimary/buttonPrimary";
import { TopPrimary } from "../../common/topPrimary/topPrimary";

export function Ciphers() {
    const lang = useAppSelector(state => state.lang)
    const theme = useAppSelector(state => state.theme)
    return (
        <CiphersWrapper>
            <Container>
                <TopPrimary
                text={lang === "eng" ? "Ciphers" : lang === "uzb" ? "Shifrlar" : "Шифры"}
                />
                <CiphersList>
                    <CiphersItem>
                        <CiphersItemBox>
                            <CiphersItemTitle>
                                {
                                    lang === "eng" ? "Symmetric key algorithms" :
                                    lang === "uzb" ? "Simmetrik kalit algoritmlari" : 
                                    "Алгоритмы с симметричным ключом"
                                }
                            </CiphersItemTitle>
                            <CiphersItemDesc>
                                {
                                    lang === "eng" ? 
                                    `Symmetric encryption is a method of data encryption 
                                    in which the same key is used both to encrypt and to 
                                    restore information. Until the 1970s, when the first 
                                    asymmetric ciphers appeared, it was the only 
                                    cryptographic method.` :
                                    lang === "uzb" ? 
                                    `Simmetrik shifrlash - ma'lumotlarni shifrlash usuli bo'lib, 
                                    unda bir xil kalit ma'lumotlarni shifrlash va qayta tiklash 
                                    uchun ishlatiladi. 1970-yillargacha, birinchi assimetrik 
                                    shifrlar paydo bo'lgunga qadar, bu yagona kriptografik usul edi.` :
                                    `Симметричное шифрование — это способ шифрования данных, 
                                    при котором один и тот же ключ используется и для кодирования, 
                                    и для восстановления информации. До 1970-х годов, когда 
                                    появились первые асимметричные шифры, оно было единственным 
                                    криптографическим методом.`
                                }
                            </CiphersItemDesc>
                            <CiphersItemDesc>
                                {
                                    lang === "eng" ? "Where they use: " :
                                    lang === "uzb" ? "Qayerda ishlatadiladi: " :
                                    "Где используют: "
                                }
                            </CiphersItemDesc>
                            <CiphersItemLogoList>
                                <CiphersItemLogo>
                                    <CiphersItemLogoIcon width={20} height={20} src={iMessage} />
                                    <CiphersItemLogoTitle>iMessage</CiphersItemLogoTitle>
                                </CiphersItemLogo>
                                <CiphersItemLogo>
                                    <CiphersItemLogoIcon height={20} src={Signal} />
                                    <CiphersItemLogoTitle>Signal</CiphersItemLogoTitle>
                                </CiphersItemLogo>
                                <CiphersItemLogo>
                                    <CiphersItemLogoIcon width={25} height={25} src={WhatsApp} />
                                    <CiphersItemLogoTitle>WhatsApp</CiphersItemLogoTitle>
                                </CiphersItemLogo>
                            </CiphersItemLogoList>
                        </CiphersItemBox>
                        <ButtonPrimary text="Symmetric ciphers" color={theme === "dark" ? "#2A2A2A" : "#D3D3D3"} backgroundColor={theme === "dark" ? "#D3D3D3" : "#2A2A2A"} link="/sym-ciphers" />
                    </CiphersItem>
                    <CiphersItem>
                        <CiphersItemBox>
                            <CiphersItemTitle>
                                {
                                    lang === "eng" ? "Asymmetric key algorithms" :
                                    lang === "uzb" ? "Asimmetrik kalit algoritmlari" : 
                                    "Алгоритмы c асимметричным ключом"
                                }
                            </CiphersItemTitle>
                            <CiphersItemDesc>
                                {
                                    lang === "eng" ?
                                    `Public-key cryptography, or asymmetric cryptography, is a 
                                    cryptographic system that uses pairs of keys. 
                                    Each pair consists of a public key (which may be known to others) 
                                    and a private key (which may not be known by anyone except the owner). 
                                    The generation of such key pairs depends on cryptographic algorithms 
                                    ]which are based on mathematical problems termed one-way functions. 
                                    Effective security requires keeping the private key private; the ,
                                    public key can be openly distributed without compromising security.` :
                                    lang === "uzb" ?
                                    `Ochiq kalitli kriptografiya yoki assimetrik kriptografiya - bu juft 
                                    kalitlardan foydalanadigan kriptografik tizim. Har bir juftlik umumiy 
                                    kalitdan (boshqalarga ma'lum bo'lishi mumkin) va shaxsiy kalitdan 
                                    (egasidan tashqari hech kimga ma'lum bo'lmasligi mumkin) iborat. 
                                    Bunday kalit juftlarini yaratish kriptografik algoritmlarga bog'liq 
                                    bo'lib, ular bir tomonlama funktsiyalar deb ataladigan matematik 
                                    algoritmga asoslangan. Samarali xavfsizlik shaxsiy kalitni maxfiy 
                                    saqlashni talab qiladi; ochiq kalit xavfsizlikni buzmasdan ochiq tarqatilishi mumkin.` :
                                    `Криптография с открытым ключом, или асимметричная криптография, 
                                    представляет собой криптографическую систему, в которой используются 
                                    пары ключей. Каждая пара состоит из открытого ключа (который может быть 
                                    известен другим) и закрытого ключа (который может быть не известен 
                                    никому, кроме владельца). Генерация таких пар ключей зависит от 
                                    криптографических алгоритмов, основанных на математических задачах, 
                                    называемых односторонними функциями. Эффективная безопасность требует, 
                                    чтобы закрытый ключ оставался закрытым; открытый ключ может распространяться 
                                    открыто без ущерба для безопасности.`
                                }
                            </CiphersItemDesc>
                            <CiphersItemDesc>
                                {
                                    lang === "eng" ? "Where they use: " :
                                    lang === "uzb" ? "Qayerda ishlatadiladi: " :
                                    "Где используют: "
                                }
                            </CiphersItemDesc>
                            <CiphersItemLogoList>
                                <CiphersItemLogo>
                                    <Icon5 width={20} height={20} color={theme === "light" ? "#000" : "#FFF"} />
                                    <CiphersItemLogoTitle>HTTPS</CiphersItemLogoTitle>
                                </CiphersItemLogo>

                                <CiphersItemLogo>
                                    <Icon6 width={20} height={20} color={theme === "light" ? "#000" : "#FFF"} />
                                    <CiphersItemLogoTitle>SSH</CiphersItemLogoTitle>
                                </CiphersItemLogo>
                            </CiphersItemLogoList>
                        </CiphersItemBox>
                        <ButtonPrimary text="Asymmetric ciphers" color={theme === "dark" ? "#2A2A2A" : "#D3D3D3"} backgroundColor={theme === "dark" ? "#D3D3D3" : "#2A2A2A"} link="/ciphers" />
                    </CiphersItem>
                </CiphersList>
            </Container>
        </CiphersWrapper>
    )
}