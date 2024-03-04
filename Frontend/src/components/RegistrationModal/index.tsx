import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { RegisterData, schema } from './schema';

import React from 'react';

import { Modal } from '../ModalOverall';

import Button from '../Buttons';

import Input from '../PropsInput';

import { StyledError, RegisterModalStyled } from './style';

import { BsX } from 'react-icons/bs';

import userContextHook from '../../hooks/userContextHooks';

interface RegistrationModalProps {
  toggleModal: () => void;
}

const RegistrationModal = ({ toggleModal }: RegistrationModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = userContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <RegisterModalStyled>
        <div>
          <h2>Formulário</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(userRegister)}>
          <Input
            inputVariation={'form'}
            id={'nameRegister'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            required={true}
            placeholder={'digite seu nome'}
            register={register('name')}
          />
          {errors.name?.message && (
            <StyledError>{errors.name.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'email'}
            type={'emailRegister'}
            disabled={false}
            label={'Email'}
            required={true}
            placeholder={'digite seu email'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneRegister'}
            type={'phone'}
            disabled={false}
            label={'Telefone'}
            required={true}
            placeholder={'digite o número de seu telefone'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordRegister'}
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

          <Input
            inputVariation={'form'}
            id={'confirmPassword'}
            type={'password'}
            disabled={false}
            label={'Confirmar senha'}
            required={true}
            placeholder={'Confirme sua senha'}
            register={register('confirmPassword')}
          />
          {errors.confirmPassword?.message && (
            <StyledError>{errors.confirmPassword.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'Sign-in'}>
            Cadastrar
          </Button>
        </form>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegistrationModal;
