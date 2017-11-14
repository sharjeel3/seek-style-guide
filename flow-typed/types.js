/* eslint-disable */

type SeekStyleGuide$ButtonProps = {
  color?: 'pink' | 'blue' | 'gray' | 'transparent',
  children: any,
  className?: string,
  component?: Function | string,
  loading?: boolean,
  fullWidth?: boolean
};

declare module 'seek-style-guide/react' {
  declare module.exports: {
    StyleGuideProvider: any,
    SeekApp: any,
    Button: React$ComponentType<SeekStyleGuide$ButtonProps>,
    ButtonGroup: any,
    Footer: any,
    Header: any,
    Loader: any,
    Logo: any,
    LogoRainbow: any,
    Rating: any,
    Critical: any,
    Paragraph: any,
    Positive: any,
    Secondary: any,
    Strong: any,
    Text: any,
    TextLink: any,
    AsidedLayout: any,
    Card: any,
    CardGroup: any,
    Columns: any,
    Hidden: any,
    PageBlock: any,
    Section: any,
    ChevronIcon: any,
    ClearIcon: any,
    CloseIcon: any,
    CrossIcon: any,
    DeleteIcon: any,
    DownRightArrowIcon: any,
    ErrorIcon: any,
    FacebookIcon: any,
    HeartIcon: any,
    HelpIcon: any,
    InfoIcon: any,
    LinkedInIcon: any,
    MailIcon: any,
    PlusIcon: any,
    ProfileIcon: any,
    SearchIcon: any,
    StartIcon: any,
    ThumbsUpIcon: any,
    TickCircleIcon: any,
    TickIcon: any,
    TwitterIcon: any,
    AutoSuggest: any,
    Checkbox: any,
    Clearfield: any,
    Dropdown: any,
    EmailField: any,
    MonthPicker: any,
    SlideToggle: any,
    TextArea: any,
    TextField: any,
    ScreenReaderOnly: any,
    ScreenReaderSkipLink: any,
    ScreenReaderSkipTarget: any
  };
};
