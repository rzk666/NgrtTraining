import React from 'react';
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';

function ModalExampleModal({ onChangeXP, onClickAbility, inputValue }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{marginRight: 20}}>Learn New Ability</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="https://tr.rbxcdn.com/99d5b12d091d22881d4a8aaba5905f62/420/420/Gear/Png" wrapped />
        <Modal.Description>
          <Header>Add New Ability Event</Header>
          <p>
            Please enter the name of the new ability you would like to learn:
          </p>
          <Input
            onChange={(e) => onChangeXP(e)}
            value={inputValue}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Add new event"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setOpen(false);
            onClickAbility();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
