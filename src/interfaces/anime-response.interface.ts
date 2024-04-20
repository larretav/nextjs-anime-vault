export interface AnimeResponse {
  id:             number;
  name:           string;
  russian:        string;
  image:          Image;
  url:            string;
  kind:           Kind;
  score:          string;
  status:         Status;
  episodes:       number;
  episodes_aired: number;
  aired_on:       Date;
  released_on:    Date;
}

interface Image {
  original: string;
  preview:  string;
  x96:      string;
  x48:      string;
}

enum Kind {
  Tv = "tv",
}

enum Status {
  Released = "released",
}
