import React from 'react';
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from '../src/components/navigation/Link';
import Menu from '../src/components/commons/Menu';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import Card from '../src/components/foundation/layout/Card';
import Wrapper from '../src/components/foundation/layout/Wrapper';
import Footer from '../src/components/commons/Footer';
import Module from '../src/components/foundation/layout/Module';

const icons = {
  Linkedin: <FaLinkedin />,
  Github: <FaGithub />,
  Instagram: <FaInstagram />,
};

export const contatcts = [
  {
    type: 'email',
    text: 'imacedo2000.im@gmail.com',
  },
  {
    type: 'Instagram',
    link: 'https://www.instagram.com/imacedooo',
    text: 'Repositório de fotos',
  },
  {
    type: 'Github',
    link: 'https://github.com/Imacedoo',
    text: 'Repositório de códigos',
  },
  {
    type: 'Linkedin',
    link: 'https://www.linkedin.com/in/igor-macedo-576311176',
    text: 'Repositório profissional',
  },
];

export default function SobreMim() {
  return (
    <Box
      tag="div"
      variant="background.main"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Menu />

      <Wrapper>
        <Text
          variant="titleXS"
          tag="h1"
          color="secondary"
          textAlign="center"
          width="100%"
        >
          Portfólio
        </Text>
        <Card
          srcImage="https://placehold.it/270x200"
          title="Titulo"
          description="Breve descrição"
        />
        <Card
          srcImage="https://placehold.it/270x200"
          title="Titulo"
          description="Breve descrição"
        />
      </Wrapper>

      <Wrapper
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}
      >
        <Box
          display="flex"
          justifyContent={{ xs: 'center', md: 'end' }}
          flexDirection="column"
          alignItems="center"
          margin="10px"
          width="50%"
        >
          <Text
            variant="titleXS"
            tag="h1"
            color="secondary"
            textAlign="center"
            width={{ xs: '100%', md: '50%' }}
          >
            Sobre mim
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary"
            textAlign="center"
          >
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit. Em breve ...
          </Text>
          <Link
            href="/minha-historia"
          >
            <Text
              color="primary"
            >
              Conheça minha história
              {' '}
              <FaArrowRight />
            </Text>
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent={{ xs: 'center', md: 'end' }}
          width={{ xs: '100%', md: '50%' }}
        >
          <Text
            variant="titleXS"
            tag="h1"
            color="secondary"
            textAlign="center"
            width="100%"
          >
            Contatos
          </Text>

          {contatcts.map((contact) => {
            if (contact.link) {
              return (
                <Module
                  key={contact.type}
                  width="300px"
                  display="block"
                >
                  <Text
                    tag="p"
                    textAlign="left"
                  >
                    <Link
                      href={contact.link}
                    >
                      {icons[contact.type]}
                      {' '}
                      {contact.text}
                    </Link>
                  </Text>
                </Module>
              );
            }

            return (
              <Module
                key={contact.type}
                width="300px"
                display="block"
              >
                <Text
                  variant="paragraph1"
                  tag="p"
                  color="secondary"
                  textAlign="left"
                >
                  {contact.text}
                </Text>
              </Module>
            );
          })}
        </Box>
      </Wrapper>

      <Footer />
    </Box>
  );
}
