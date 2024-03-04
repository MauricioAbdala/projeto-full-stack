import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { DataLogin, schema } from './schema';

import Button from '../../components/Buttons';

import { StyledMain, StyledError } from './style';

import React from 'react';

import userContextHook from '../../hooks/userContextHooks';

import Input from '../../components/PropsInput';

import RegistrationModal from '../../components/RegistrationModal';

const Home = () => {
  const { userLogin, toggleModal, isOpenModal } = userContextHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataLogin>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledMain>
      <section>
        <div>
          <h2>Bem vindo esta é sua agenda <br/>para contatos</h2><br/>
          <h3>Login da conta</h3>
        </div>
        <form onSubmit={handleSubmit(userLogin)}>
          <Input
            inputVariation={'form'}
            id={'emailLogin'}
            type={'email'}
            disabled={false}
            label={'e-mail'}
            required={true}
            placeholder={'digite seu email'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordLogin'}
            type={'password'}
            disabled={false}
            label={'Senha'}
            required={true}
            placeholder={'digite sua senha'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'Sign-in'}>
            Entrar
          </Button>
        </form>
        <div>
          <p>Não possui uma conta?</p>
          <Button
            type={'submit'}
            buttonVariation={'Join'}
            onClick={toggleModal}
          >
            Cadastre agora!
          </Button>
        </div>
      </section>
      {isOpenModal && <RegistrationModal toggleModal={toggleModal} />}
    </StyledMain>
  );
};

export default Home;
