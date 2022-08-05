# Quick Notes

Some of the styles are not 100% accurate to the BJCP 2021 style guidelines. This was converted from a docx format and parsed using a complicated script to convert this to JSON format. If you're interested in the script that converted the docx I can post a gist to it.

There is one style, "Saison" that has a slightly different format due to the way the BJCP creates the style, since there is a table, standard and super version and their "Vital Statistics" are formatted a bit strangely, there is a `vitalStatistics` property as well as an options (type wise) `specialStatistics` property to holw the specific differences in "type". The `vitalStatistics` props on this style includes the full range of stats with the specifics being housed in the "Special Statistics".

# Getting started

## Installation

```bash
yarn add 2021-beer-styles
```

## Usage

Import the beer styles JSON data

```js
import BeerStyles from '2021-beer-styles';
```

Import types used in the package

```ts
import { BeerStyle } from '2021-beer-styles';
```

## 🤝 Contributing

Contributions to styles and other fixes are totally welcome! [issues page](issues).
