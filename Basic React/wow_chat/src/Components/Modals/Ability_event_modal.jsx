import React, { useState } from 'react';
// -----Componenets-----//
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';
// -----Images----- //
import AbilityImage from '../../Static/Modals/Ability.png';
// hocs
import withHover from '../../hocs/withHover';

const AbilityEventModal = ({
  onChangeAbility, onClickAbility, inputValue, setCurrentModalEvent,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ marginRight: 20 }}>Learn New Ability</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={AbilityImage}
          wrapped
        />
        <Modal.Description>
          <Header>Add New Ability Event</Header>
          <p>
            Please enter the name of the new ability you would like to learn:
          </p>
          <Input
            onChange={(e) => onChangeAbility(e)}
            value={inputValue}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => {
            setOpen(false);
            setCurrentModalEvent('');
          }}
        >
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
};

export default withHover(AbilityEventModal);
