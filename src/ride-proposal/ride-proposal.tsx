import * as React from 'react';
import { useStyletron } from '../styles';
import { Button } from '../button';
import { Input } from '../input';

export default function RideProposal() {
  const [css, theme] = useStyletron();
  const [price, setPrice] = React.useState('');
  const [accepted, setAccepted] = React.useState(false);

  if (accepted) {
    return (
      <div className={css({ padding: '20px' })}>
        <h2>Proposta aceita!</h2>
        <p>A corrida foi confirmada com o valor de R$ {price}.</p>
      </div>
    );
  }

  return (
    <div className={css({ padding: '20px' })}>
      <h2>Proposta de Corrida</h2>
      <Input
        value={price}
        onChange={(e) => setPrice(e.currentTarget.value)}
        placeholder="Proponha um valor"
        startEnhancer="R$"
        clearable
      />
      <Button
        onClick={() => setAccepted(true)}
        overrides={{ BaseButton: { style: { marginTop: '20px' } } }}
      >
        Enviar Proposta
      </Button>
    </div>
  );
} 