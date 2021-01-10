---
to: "<%= generateSpec ? `${absPath}/${componentName}.spec.jsx` : null %>"
---

import React from 'react';
import { render, screen } from '@testing-library/react';
import <%= componentName %> from './';

describe('<%= componentName %> component', () => {
  test('Should be', () => {});
});
