import React, { useState } from 'react';
// -----Componenets----- //
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';
// -----Images ----- //
import LootImage from '../../Static/Modals/Loot.png';
// hocs
import withHover from '../../hocs/withHover';

const LootEventModal = ({
  onChangeLoot, onClickLoot, inputValue, setCurrentModalEvent,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ marginRight: 20 }}>Add Loot Event</Button>}
    >
      <Modal.Header>Loot</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={LootImage}
          wrapped
        />
        <Modal.Description>
          <Header>Add New Loot Event</Header>
          <p>
            Please enter the name of the item you would like to loot:
          </p>
          <Input
            onChange={(e) => onChangeLoot(e)}
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
            onClickLoot();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default withHover(LootEventModal);
