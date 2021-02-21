import React from 'react';
import Menu from '../src/components/commons/Menu';
import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text/index';
import Footer from '../src/components/commons/Footer';

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
            offset={{ md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            marginBottom="40px"
          >
            <div style={{ border: '1px solid black' }}>
              <img src="../public/images/igor_prates.jpg" alt="Foto Igor Prates" />
            </div>
            <Text
              variant="smallestException"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Eai, beleza?
            </Text>
            <Text
              variant="titleXS"
              color="secondary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Prazer,
              <span>Igor Prates</span>
            </Text>
            <Text>
              Estudante & Desenvolvedor Web
            </Text>
            <Text>
              {/* eslint-disable-next-line max-len */}
              Jovem estudante apaixonado por aprender, principalmente, coisas relacionadas a tecnologia. Atualmente, trabalho na Escola Móbile e estudo na UFABC.
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
