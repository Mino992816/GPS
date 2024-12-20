declare module '@googlemaps/react-wrapper' {
  import { ReactElement } from 'react';

  export interface Status {
    status: 'LOADING' | 'FAILURE' | 'SUCCESS';
  }

  export interface WrapperProps {
    apiKey: string;
    children: ReactElement | ReactElement[];
    libraries?: string[];
    callback?: () => void;
    render?: (status: Status) => ReactElement;
  }

  export function Wrapper(props: WrapperProps): ReactElement;
}