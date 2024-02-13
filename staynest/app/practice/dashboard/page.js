'use client';

import { Button, Container } from 'flowbite-react';

function Component() {
  return (
    <Container>
      <Button.Group className="flex justify-center gap-5">
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </Button.Group>
    </Container>
  );
}

export default Component;
