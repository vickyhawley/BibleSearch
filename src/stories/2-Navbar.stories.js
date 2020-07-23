import React from 'react';
import { action } from '@storybook/addon-actions';
import Navbar from '../components/homepage/navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Text = () => <Navbar onClick={action('clicked')}>Hello Button</Navbar>;

export const Emoji = () => (
  <Navbar onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Navbar>
);
