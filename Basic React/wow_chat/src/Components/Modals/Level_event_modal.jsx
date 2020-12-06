import React, { useState } from 'react';
// -----Components----- //
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';
// -----Images----- //
import LevelUpImage from '../../Static/Modals/Level Up.png';
// hocs
import withHover from '../../hocs/withHover';

const LevelEventModal = ({
  onChangeLvl, onClickLvl, inputValue, setCurrentModalEvent,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ marginRight: 20 }}>LVL UP</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={LevelUpImage}
          wrapped
        />
        <Modal.Description>
          <Header>Add Level Up Event</Header>
          <p>
            Please enter the level you've just gained:
          </p>
          <Input
            onChange={(e) => onChangeLvl(e)}
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
            onClickLvl();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default withHover(LevelEventModal);
