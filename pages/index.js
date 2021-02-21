import React from 'react';
import Link from 'next/link';
import Menu from '../src/components/commons/Menu';
import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text/index';
import Footer from '../src/components/commons/Footer';
import Avatar from '../src/components/dataDisplay/Avatar';

export default function Home() {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      flexWrap="wrap"
      variant="background.main"
      justifyContent="space-between"
    >
      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
            marginBottom="30px"
            order={{ xs: 1, md: 2 }}
          >
            <Avatar
              src="/images/igor_prates.JPG"
              alt="Foto Igor Prates"
            />
          </Grid.Col>
          <Grid.Col
            offset={{ md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent="center"
            flexDirection="column"
            marginBottom="40px"
            order={{ xs: 2, md: 1 }}
          >
            <Text
              variant="title"
              tag="h1"
              color="primary"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              <Text
                variant="paragraph2"
                color="secondary"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Eai, beleza?
              </Text>
              <br />
              <Text
                variant="titleXS"
                color="secondary"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Prazer,
              </Text>
              <Text
                variant="titleXS"
                color="primary"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                {' '}
                Igor Prates
              </Text>
              <br />
              <Text
                variant="subTitle"
                color="tertiary"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Estudante & Desenvolvedor Web
              </Text>
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              {/* eslint-disable-next-line max-len */}
              Jovem estudante apaixonado por aprender, principalmente, coisas relacionadas a tecnologia. Atualmente, trabalho na Escola Móbile e estudo na UFABC.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 12,
            }}
            order={{ xs: 3, md: 3 }}
          >
            <Link href="/sobre-mim">
              <a
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  color: '#328CC1',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                Press Start
                <br />
                to
                <br />
                know me
              </a>
            </Link>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
