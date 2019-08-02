/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeLabel3: {
    id: `${scope}.tryme.label`,
    defaultMessage: 'Fill up the form',
  },

  trymeLabel: {
    id: `${scope}.tryme.label`,
    defaultMessage: 'Name:',
  },
  trymeLabel1: {
    id: `${scope}.tryme.label`,
    defaultMessage: 'Contact Number:',
  },
  trymeLabel2: {
    id: `${scope}.tryme.label`,
    defaultMessage: 'Address:',
  },
});
