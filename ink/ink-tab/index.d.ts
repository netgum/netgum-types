declare module 'ink-tab' {
  import { Component } from 'react';

  declare class Tab extends Component<Tab.IProps> {
    //
  }

  declare namespace Tab {
    export interface IProps {
      name: string;
    }
  }

  declare class Tabs extends Component<Tabs.IProps> {
    //
  }

  declare namespace Tabs {
    export interface IProps {
      onChange?: TOnChangeHandler;
      keyMap?: IKeyMap;
    }

    export type TOnChangeHandler = (name?: string, activeTab?: Tab) => any;

    export interface IKeyMap {
      useTab?: boolean;
      useNumbers?: boolean;
      previous?: string[];
      next?: string[];
    }
  }

  export {
    Tab,
    Tabs,
  };
}
