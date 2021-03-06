import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { FaRegWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';
import errorAnimation from './animations/error.json';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import Button from '../../commons/Button';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [messageInfo, setMessageInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setMessageInfo({
      ...messageInfo,
      [fieldName]: event.target.value,
    });
  }

  function checkForm(fields) {
    const invalidsFields = {};
    fields.forEach((field) => {
      if (field === 'email') {
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        invalidsFields[field] = !(regex.test(messageInfo[field]));
      } else {
        invalidsFields[field] = messageInfo[field].length === 0;
      }
    });
    return invalidsFields;
  }

  const invalidsFields = checkForm(['name', 'email', 'message']);
  const isFormInvalid = Object.keys(invalidsFields).filter((field) => invalidsFields[field]).length;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);
        setSubmissionStatus(formStates.LOADING);

        const messageDTO = {
          name: messageInfo.name,
          email: messageInfo.email,
          message: messageInfo.message,
        };

        fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(messageDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Ops, algo deu errado!');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);

            setTimeout(() => {
              setMessageInfo({
                name: '',
                email: '',
                message: '',
              });
              setSubmissionStatus(formStates.DEFAULT);
              setIsFormSubmited(false);
            }, 4000);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);

            setTimeout(() => {
              setMessageInfo({
                name: '',
                email: '',
                message: '',
              });
              setSubmissionStatus(formStates.DEFAULT);
              setIsFormSubmited(false);
            }, 4000);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Envie sua mensagem
      </Text>

      <div>
        <TextField
          label="Seu nome"
          placeholder="Seu nome"
          name="name"
          value={messageInfo.name}
          onChange={handleChange}
        />
        {invalidsFields.name && (
          <span
            style={{ color: 'red', marginBottom: '14px', fontSize: '12px' }}
          >
            Este campo é obrigatório
          </span>
        )}
      </div>

      <div>
        <TextField
          label="Sua e-mail"
          placeholder="exemplo@exemplo.com"
          name="email"
          value={messageInfo.email}
          onChange={handleChange}
        />
        {invalidsFields.email && (
          <span
            style={{ color: 'red', marginBottom: '14px', fontSize: '12px' }}
          >
            Digite um e-mail válido
          </span>
        )}
      </div>

      <div>
        <TextField
          label="Sua mensagem"
          name="message"
          tag="textarea"
          value={messageInfo.message}
          onChange={handleChange}
          height="120px"
        />
        {invalidsFields.message && (
          <span
            style={{ color: 'red', marginBottom: '14px', fontSize: '12px' }}
          >
            Este campo é obrigatório
          </span>
        )}
      </div>

      {!isFormSubmited && submissionStatus === formStates.DEFAULT && (
        <Button
          variant="primary.main"
          type="submit"
          disabled={isFormInvalid}
          fullWidth
          margin="10px 0 0 0"
        >
          Enviar mensagem
        </Button>
      )}

      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: successAnimation, loop: true, autoplay: true }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ onClose, propsDoModal }) {
  return (
    <Grid.Row
      margin="auto auto 0 auto"
      flex={1}
      justifyContent="flex-end"
      width="50%"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value="12"
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          flex={1}
          borderRadius="8px 8px 0 0"
          padding={{
            xs: '16px',
            md: '40px',
          }}
          height="570px"
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <div
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              style={{ color: '#000' }}
              onClick={(event) => {
                event.preventDefault();
                onClose();
              }}
            >
              <FaRegWindowClose />
            </a>
          </div>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.propTypes = {
  onClose: PropTypes.func,
};

FormCadastro.defaultProps = {
  onClose: '',
};
