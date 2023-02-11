export interface Comic {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Comics[];
}

export interface Comics {
  id:                 number;
  digitalId:          number;
  title:              string;
  issueNumber:        number;
  variantDescription: string;
  description:        null | string;
  modified:           string;
  isbn:               string;
  upc:                string;
  diamondCode:        DiamondCode;
  ean:                string;
  issn:               string;
  format:             Format;
  pageCount:          number;
  textObjects:        TextObject[];
  resourceURI:        string;
  urls:               URL[];
  series:             Series;
  variants:           Series[];
  collections:        Series[];
  collectedIssues:    any[];
  dates:              DateElement[];
  prices:             Price[];
  thumbnail:          Thumbnail;
  images:             Thumbnail[];
  creators:           Creators;
  characters:         Characters;
  stories:            Stories;
  events:             Characters;
}

export interface Characters {
  available:     number;
  collectionURI: string;
  items:         Series[];
  returned:      number;
}

export interface Series {
  resourceURI: string;
  name:        string;
}

export interface Creators {
  available:     number;
  collectionURI: string;
  items:         CreatorsItem[];
  returned:      number;
}

export interface CreatorsItem {
  resourceURI: string;
  name:        string;
  role:        Role;
}

export enum Role {
  Colorist = "colorist",
  Editor = "editor",
  Inker = "inker",
  Letterer = "letterer",
  Penciler = "penciler",
  Penciller = "penciller",
  PencillerCover = "penciller (cover)",
  Writer = "writer",
}

export interface DateElement {
  type: DateType;
  date: string;
}

export enum DateType {
  DigitalPurchaseDate = "digitalPurchaseDate",
  FocDate = "focDate",
  OnsaleDate = "onsaleDate",
  UnlimitedDate = "unlimitedDate",
}

export enum DiamondCode {
  Empty = "",
  Jan011524 = "JAN011524",
  Jun021764 = "JUN021764",
  May011666 = "MAY011666",
  Nov001629 = "NOV001629",
  Oct011890 = "OCT011890",
  Sep001503 = "SEP001503",
}

export enum Format {
  Comic = "Comic",
  DigitalComic = "Digital Comic",
}

export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export enum Extension {
  Jpg = "jpg",
}

export interface Price {
  type:  PriceType;
  price: number;
}

export enum PriceType {
  DigitalPurchasePrice = "digitalPurchasePrice",
  PrintPrice = "printPrice",
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
  Letters = "letters",
  Recap = "recap",
}

export interface TextObject {
  type:     TextObjectType;
  language: Language;
  text:     string;
}

export enum Language {
  EnUs = "en-us",
}

export enum TextObjectType {
  IssuePreviewText = "issue_preview_text",
  IssueSolicitText = "issue_solicit_text",
  TypeIssuePreviewText = "issue_preview_text.",
}

export interface URL {
  type: URLType;
  url:  string;
}

export enum URLType {
  Detail = "detail",
  InAppLink = "inAppLink",
  Purchase = "purchase",
  Reader = "reader",
}
