import * as React from 'react';
interface HelloProps {
    compiler: string;
    framework: string;
}
declare class Hello extends React.Component<HelloProps, {}> {
    render(): JSX.Element;
}
export default Hello;
export { Hello, HelloProps };
