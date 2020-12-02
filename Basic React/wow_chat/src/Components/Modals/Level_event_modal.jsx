import React from 'react';
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';

function ModalExampleModal({ onChangeXP, onClickLvl, inputValue }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{marginRight: 20}}>LVL UP</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/arrow_up.png" wrapped />
        <Modal.Description>
          <Header>Add Level Up Event</Header>
          <p>
            Please enter the level you've just gained:
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
            onClickLvl();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
