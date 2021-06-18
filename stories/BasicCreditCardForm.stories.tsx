// Vendor Modules
import { Meta, Story } from '@storybook/react';
import * as React from 'react';

// Internals
import { CreditCardInput, SquarePaymentsForm } from '../src';
import type { SquarePaymentsFormProps } from '../src';

export const Default: Story<SquarePaymentsFormProps> = (args) => (
  <SquarePaymentsForm
    {...args}
    cardTokenizeResponseReceived={(props) => {
      console.log(props);
    }}
  >
    <CreditCardInput />
  </SquarePaymentsForm>
);

export default {
  title: 'Credit Card',
  component: SquarePaymentsForm,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    methodsSupported: {
      control: {
        type: 'object',
        required: false,
      },
      defaultValue: {
        card: true,
      },
      type: {
        summary: 'MethodsSupported',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;
