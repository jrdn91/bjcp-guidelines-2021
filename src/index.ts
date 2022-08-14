import { BeerCategory } from './types';

export {
  RangeType,
  VitalStatisticsAsObject,
  VitalStatistics,
  VitalStatisticsKeys,
  BeerStyleProperties,
  BeerStyle,
  BeerCategory,
} from './types';
const BeerStyles: BeerCategory[] = [
  {
    title: '1. Standard American Beer',
    description:
      'This category describes everyday American beers that have a wide public appeal. Containing both ales and lagers, the beers of this category are not typically complex, and have smooth, accessible flavors. The ales tend to have lager-like qualities, or are designed to appeal to mass-market lager drinkers as crossover beers. Mass-market beers with a more international appeal or origin are described in the International Lager category.',
    styles: [
      {
        title: '1A. American Light Lager',
        properties: {
          overallImpression:
            'A highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst-quenching.',
          aroma:
            'Low malt aroma optional, but may be perceived as grainy, sweet, or corn-like, if present. Light spicy, floral, or herbal hop aroma optional. While a clean fermentation profile is desirable, a light amount of yeast character is not a fault.',
          appearance: 'Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear.',
          flavor:
            'Relatively neutral palate with a crisp, dry finish and a low to very low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Low floral, spicy, or herbal hop flavor optional, but is rarely strong enough to detect. Low to very low bitterness. Balance may vary from slightly malty to slightly bitter, but is usually close to even. High carbonation may accentuate the crispness of the dry finish. Clean fermentation profile.',
          mouthfeel:
            'Very light, sometimes watery, body. Very highly carbonated with slight carbonic bite on the tongue.',
          comments:
            'Designed to appeal to as broad a range of the general public as possible. Strong flavors are a fault. With little malt or hop flavor, the yeast character often is what most differentiates brands.',
          history:
            'Coors briefly made a light lager in the early 1940s. Modern versions were first produced by Rheingold in 1967 to appeal to diet-conscious drinkers, but only became popular starting in 1973 after Miller Brewing acquired the recipe and marketed the beer heavily to sports fans with the "tastes great, less filling" campaign. Beers of this genre became the largest sellers in the United States in the 1990s.',
          characteristicIngredients:
            'Two- or six-row barley with up to 40% rice or corn as adjuncts. Additional enzymes can further lighten the body and lower carbohydrates. Lager yeast. Negligible hops.',
          styleComparison:
            'A lighter-bodied, lower-alcohol, lower calorie version of an American Lager. Less hop character and bitterness than a German Leichtbier.',
          vitalStatistics: {
            OG: [1.028, 1.04],
            IBUs: [8, 12],
            FG: [0.998, 1.008],
            SRM: [2, 3],
            ABV: [2.8, 4.2],
          },
          commercialExamples:
            'Bud Light, Coors Light, Grain Belt Premium Light American Lager, Michelob Light, Miller Lite, Old Milwaukee Light',
          tags: 'session-strength, pale-color, bottom-fermented, lagered, north-america, traditional-style, pale-lager-family, balanced',
        },
      },
      {
        title: '1B. American Lager',
        properties: {
          overallImpression:
            'A very pale, highly-carbonated, light-bodied, well-attenuated lager with a very neutral flavor profile and low bitterness. Served very cold, it can be a very refreshing and thirst-quenching drink.',
          aroma:
            'Low malt aroma optional, but may be perceived as grainy, sweet, or corn-like, if present. Light spicy or floral hop aroma optional. While a clean fermentation profile is desirable, a light amount of yeast character is not a fault.',
          appearance: 'Very pale straw to medium yellow color. White, frothy head seldom persists. Very clear.',
          flavor:
            'Relatively neutral palate with a crisp, dry finish and a moderately-low to low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Moderately low hop flavor optional, with a floral, spicy, or herbal quality, if strong enough to distinguish. Low to medium-low bitterness. Balance may vary from slightly malty to slightly bitter, but is usually close to even. High carbonation may accentuate the crispness of the dry finish. Clean fermentation profile.',
          mouthfeel: 'Low to medium-low body. Very highly carbonated with slight carbonic bite on the tongue.',
          comments:
            'Often what non-craft beer drinkers expect to be served if they order beer in the United States. May be marketed as Pilsner outside Europe, but should not be confused with traditional examples. Strong flavors are a fault. With little malt or hop flavor, the yeast character is what most frequently differentiates brands.',
          history:
            'Evolved from Pre-Prohibition Lager (see Category 27) in the US after Prohibition and World War II. Surviving breweries consolidated, expanded distribution, and heavily promoted a beer style that appealed to a broad range of the population. Became the dominant beer style for many decades, and spawned many international rivals who would develop similarly bland products for the mass market supported by heavy advertising.',
          characteristicIngredients:
            'Two- or six-row barley with up to 40% rice or corn as adjuncts. Lager yeast. Light use of hops.',
          styleComparison:
            'Stronger, more flavor and body than an American Light Lager. Less bitterness and flavor than an International Pale Lager. Significantly less flavor, hops, and bitterness than traditional European Pilsners.',
          vitalStatistics: {
            OG: [1.04, 1.05],
            IBUs: [8, 18],
            FG: [1.004, 1.01],
            SRM: [2, 3.5],
            ABV: [4.2, 5.3],
          },
          commercialExamples:
            'Budweiser, Coors Original, Grain Belt Premium American Lager, Miller High Life, Old Style, Pabst Blue Ribbon, Special Export',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, north-america, traditional-style, pale-lager-family, balanced',
        },
      },
      {
        title: '1C. Cream Ale',
        properties: {
          overallImpression:
            'A clean, well-attenuated, highly carbonated, flavorful American "lawnmower" beer. Easily drinkable, smooth, and refreshing, with more character than typical American lagers, yet still subtle and restrained.',
          aroma:
            'Medium-low to low malt notes, with a sweet, corn-like aroma. Low DMS optional. Medium-low hop aroma optional, using any variety but floral, spicy, or herbal notes are most common. Overall, has a subtle, balanced aroma. Low fruity esters optional.',
          appearance:
            'Pale straw to light gold color, although usually on the pale side. Low to medium head with medium to high carbonation. Fair head retention. Brilliant, sparkling clarity. Effervescent.',
          flavor:
            'Low to medium-low hop bitterness. Low to moderate malty sweetness, varying with gravity and attenuation. The malt is generally neutral, possibly grainy or crackery. Usually well-attenuated. Balanced palate, with hops only enough to support the malt. A low to moderate corny flavor is commonly found, but light DMS is optional. Finish can vary from somewhat light, dry, and crisp to faintly sweet. Clean fermentation profile, but low fruity esters are optional. Low to medium-low hop flavor of any variety, but typically floral, spicy, or herbal. Subtle.',
          mouthfeel:
            'Generally light and crisp, although body can reach medium. Smooth mouthfeel with medium to high attenuation; higher attenuation levels can lend a "thirst quenching" quality. High carbonation.',
          comments:
            'Most commercial examples are in the 1.050-1.053 OG range, and bitterness rarely rises above 20 IBUs.',
          history:
            'A sparkling or present-use ale from the second half of the 1800s that survived prohibition. An ale brewed to compete with lagers brewed in Canada and the US Northeast, Mid-Atlantic, and Midwest states.',
          characteristicIngredients:
            'American six-row malt, or a combination of six-row and North American two-row. Up to 20% maize in the mash, and up to 20% sugar in the boil. Any variety of hops, often rustic American or Continental. Clean ale yeast, or a mix of ale and lager beer.',
          styleComparison:
            'Similar to a Standard American Lager, but with more character. Lighter body, smoother, and more carbonated than a Blonde Ale. May seem like a somewhat subtle Kölsch.',
          vitalStatistics: {
            OG: [1.042, 1.055],
            IBUs: [8, 20],
            FG: [1.006, 1.012],
            SRM: [2, 5],
            ABV: [4.2, 5.6],
          },
          commercialExamples:
            'Genesee Cream Ale, Liebotschaner Cream Ale, Kiwanda Pre-Prohibition Cream Ale, Little Kings Cream Ale, Sleeman Cream Ale, Sun King Sunlight Cream Ale',
          tags: 'standard-strength, pale-color, any-fermentation, north-america, traditional-style, pale-ale-family, balanced',
        },
      },
      {
        title: '1D. American Wheat Beer',
        properties: {
          overallImpression:
            'A pale, refreshing grainy, doughy, or bready wheat beer with a clean fermentation profile and a variable hop character and bitterness. Its lighter body and higher carbonation contribute to its easy-drinking nature.',
          aroma:
            'Low to moderate grainy, bready, or doughy wheat character. A light to moderate malty sweetness is acceptable. Moderate esters optional, usually a neutral profile; banana is inappropriate. Low to moderate citrusy, spicy, floral, or fruity hop aroma. Not typically dry-hopped. No clove phenols.',
          appearance:
            'Usually pale yellow to gold. Clarity may range from brilliant to hazy with yeast approximating a Weissbier. Big, long-lasting white head.',
          flavor:
            'Light to moderately-strong bready, doughy, or grainy wheat flavor, which can linger into the finish. May have a moderate malty sweetness or can finish quite dry and crisp. Low to moderate hop bitterness, sometimes lasting into the finish. Balance is usually even, but may be slightly bitter. Low to moderate citrusy, spicy, floral, or fruity hop flavor. Moderate esters optional. No banana. No clove phenols.',
          mouthfeel:
            "Medium-light to medium body. Medium-high to high carbonation. Slight creaminess is optional; wheat beers sometimes have a soft, 'fluffy' impression.",
          comments:
            'Different variations exist, from an easy-drinking fairly sweet beer to a dry, aggressively-hopped beer with a strong wheat flavor. American Rye beers should be entered as 31A Alternative Grain Beer.',
          history:
            'An American craft beer adaptation of the Weissbier style using a cleaner yeast and more hops, first produced by Anchor in 1984 and later widely popularized by Widmer.',
          characteristicIngredients:
            'Clean American ale or lager yeast. German Weissbier yeast is inappropriate. Wheat malt (often 30-50%, lower than is typical in Weissbier). American, German, or New World hops.',
          styleComparison:
            'More hop character and less yeast character than Weissbier. Never with the banana and clove character of Weissbier. Generally has the same range and balance as Blonde Ales, but with a wheat character as the primary malt flavor.',
          vitalStatistics: {
            OG: [1.04, 1.055],
            IBUs: [15, 30],
            FG: [1.008, 1.013],
            SRM: [3, 6],
            ABV: [4, 5.5],
          },
          commercialExamples:
            "Bell's Oberon, Boulevard Unfiltered Wheat Beer, GoodLife Sweet As! Pacific Ale, Goose Island 312 Urban Wheat Ale, Widmer Hefeweizen",
          tags: 'standard-strength, pale-color, any-fermentation, north-america, craft-style, wheat-beer-family, balanced',
        },
      },
    ],
  },
  {
    title: '2. International Lager',
    description:
      'International lagers are the premium, industrial, mass-market lagers produced in most countries in the world. Whether developed from American or European styles, they all tend to have a fairly uniform character and are heavily marketed. Loosely derived from original Pilsner-type lagers, with colored variations having additional malt flavors while retaining a broad appeal. In many countries, the styles will be referred to by their local country names. The use of the term "international" doesn\'t mean that any beers are actually labeled as such, but is more of a categorization of similar beers produced worldwide.',
    styles: [
      {
        title: '2A. International Pale Lager',
        properties: {
          overallImpression:
            'A highly-attenuated pale lager without strong flavors, typically well-balanced and highly carbonated. Served cold, it is refreshing and thirst-quenching.',
          aroma:
            'Low to medium-low grainy-malty or slightly corny-sweet malt aroma. Very low to medium spicy, floral, or herbal hop aroma. Clean fermentation profile.',
          appearance: 'Pale straw to gold color. White, frothy head may not be long lasting. Very clear.',
          flavor:
            'Low to moderate levels of grainy-malt flavor, medium-low to medium bitterness, with a crisp, dry, well-attenuated finish. The grain character can be somewhat neutral, or show a light bready-crackery quality. Moderate corny or malty sweetness optional. Medium floral, spicy, or herbal hop flavor optional. Balance may vary from slightly malty to slightly bitter, but is usually relatively close to even. Neutral aftertaste with light malt and sometimes hop flavors.',
          mouthfeel:
            'Light to medium body. Moderately high to highly carbonated. Can have a slight carbonic bite on the tongue.',
          comments:
            'Tends to have fewer adjuncts than American Lagers. They may be all-malt, although strong flavors are still a fault. A broad category of international mass-market lagers ranging from up-scale American lagers to the typical "import" or "green bottle" international beers found in America and many export markets. Often confusingly labeled as a "Pilsner." Any skunkiness in commercial beers is a handling fault, not a characteristic of the style.',
          history:
            'In the United States, developed as a premium version of the standard American lager, with a similar history. Outside the US, developed either as an imitation of American-style lagers, or as a more accessible (and often drier and less bitter) version of a Pilsner-type beer. Often heavily marketed and exported by large industrial or multi-national breweries.',
          characteristicIngredients:
            'Two- or six-row barley. May use rice, corn, or sugar as adjuncts, but are generally all malt.',
          styleComparison:
            'Generally more bitter and filling than American Lager. Less hoppy and bitter than a German Pils. Less body, malt flavor, and hop character than a Czech Premium Pale Lager. More robust versions can approach a Munich Helles in flavor, but with more of an adjunct quality.',
          entryInstructions: 'Entrant may specify regional variations, if desired (Mexican lager, Dutch lager, etc.).',
          vitalStatistics: {
            OG: [1.042, 1.05],
            IBUs: [18, 25],
            FG: [1.008, 1.012],
            SRM: [2, 6],
            ABV: [4.5, 6],
          },
          commercialExamples:
            'Asahi Super Dry, Birra Moretti, Corona Extra, Devils Backbone Gold Leaf Lager, Full Sail Session Premium Lager, Heineken, Red Stripe, Singha',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, traditional-style, pale-lager-family, balanced',
        },
      },
      {
        title: '2B. International Amber Lager',
        properties: {
          overallImpression:
            'A smooth, easily-drinkable, malty amber lager with a flavorful caramel or toast character. Usually fairly well-attenuated, often with an adjunct quality and restrained bitterness.',
          aroma:
            'Low to moderate grainy malt aroma often with very low to moderate caramel or toasty malt accents. Occasionally, nutty or biscuity, but never roasty. Low, unobtrusive floral or spicy hop aroma. Clean fermentation profile.',
          appearance:
            'Golden-amber to reddish-copper color. Bright clarity. White to off-white foam stand which may not last.',
          flavor:
            'Low to moderate malt flavor, often with caramel or toasty-bready flavors. Low to medium-low corny sweetness optional. Low to moderate bitterness, giving the beer a malty to fairly even balance. Low to moderate spicy, herbal, or floral hop flavor. Clean fermentation profile. The finish is moderately dry with a moderately malty aftertaste. The beer may seem a touch sweet if the bitterness level is low.',
          mouthfeel: 'Light to medium body. Medium to high carbonation. Smooth. Some examples can be slightly creamy.',
          comments:
            'A wide spectrum of mass-market amber lagers either developed independently in various countries, or describing rather generic amber beers with more historical relevance that eventually changed into indistinguishable products in modern times.',
          history:
            'Varies by country, but generally represents either an adaptation of the mass-market International Pale Lager, or an evolution of indigenous styles into more generic products.',
          characteristicIngredients:
            'Two-row or six-row base malt. Color malts such as Victory, amber, or roast. May be all malt or use adjuncts. Sugars or coloring agents possible. Caramel malt. European or American hops.',
          styleComparison:
            'Less well-developed malt flavor than a Vienna Lager, often with an adjunct taste. Less robust flavor and bitterness than Altbier.',
          vitalStatistics: {
            OG: [1.042, 1.055],
            IBUs: [8, 25],
            FG: [1.008, 1.014],
            SRM: [6, 14],
            ABV: [4.5, 6],
          },
          commercialExamples:
            'Abita Amber Lager, Brooklyn Lager, Capital Wisconsin Amber Lager, Dos Equis Amber, Grain Belt NordEast, Yuengling Lager',
          tags: 'standard-strength, amber-color, bottom-fermented, lagered, traditional-style, amber-lager-family, malty',
        },
      },
      {
        title: '2C. International Dark Lager',
        properties: {
          overallImpression:
            'A darker, richer, and somewhat sweeter version of international pale lager with a little more body and flavor, but equally restrained in bitterness. The low bitterness leaves the malt as the primary flavor element, and the low hop levels provide very little in the way of balance.',
          aroma:
            'Faint malt aroma. Medium-low roast and caramel malt aroma optional. Light spicy, herbal, or floral hop aroma optional. Clean fermentation profile.',
          appearance:
            'Deep amber to very dark brown with bright clarity and ruby highlights. Foam stand may not be long lasting, and is beige to light tan in color.',
          flavor:
            'Low to medium sweet maltiness. Medium-low caramel or roasted malt flavors optional, possibly with hints of coffee, molasses, brown sugar, or cocoa. Low floral, spicy, or herbal hop flavor optional. Low to medium bitterness. May have a very light fruitiness. Moderately crisp finish. The balance is typically somewhat malty. Burnt or moderately strong roasted malt flavors are inappropriate.',
          mouthfeel: 'Light to medium-light body. Smooth with a light creaminess. Medium to high carbonation.',
          comments:
            'A broad range of international lagers that are darker than pale, and not assertively bitter or roasted.',
          history:
            'Darker versions of International Pale Lagers often created by the same large, industrial breweries and meant to appeal to a broad audience. Often either a colored or sweetened adaptation of the standard pale industrial lager, or a more broadly accessible (and inexpensive) version of more traditional dark lagers.',
          characteristicIngredients:
            'Two- or six-row barley with corn, rice, or sugars adjuncts. Light use of caramel and darker roasted malts. Commercial versions may use coloring agents.',
          styleComparison:
            'Less flavor and richness than Munich Dunkel, Schwarzbier, or other dark lagers. Frequently uses adjuncts, as is typical of other International Lagers.',
          vitalStatistics: {
            OG: [1.044, 1.056],
            IBUs: [8, 20],
            FG: [1.008, 1.012],
            SRM: [14, 30],
            ABV: [4.2, 6],
          },
          commercialExamples:
            'Baltika #4 Original, Dixie Blackened Voodoo, Heineken Dark Lager, Saint Pauli Girl Special Dark, San Miguel Dark, Shiner Bock',
          tags: 'standard-strength, dark-color, bottom-fermented, lagered, traditional-style, dark-lager-family, malty',
        },
      },
    ],
  },
  {
    title: '3. Czech Lager',
    description:
      'Czech lagers are generally divided by gravity class (draft, lager, special) and color (pale, amber, dark). The Czech names for these categories are světlé (pale), polotmavé (amber), and tmavé (dark). The gravity classes are výčepní (draft, 7-10 °P), ležák (lager, 11-12 °P), and speciální (special, 13 °P+). Pivo is of course the Czech word for beer. The division into gravity classes is similar to the German groupings of schankbier, vollbier, and starkbier, although at different gravity ranges. Czech beers within the classes are often simply referenced by their gravity. There are often variations within the gravity-color groupings, particularly within the speciální class. The style guidelines combine some of these classes, while other beers in the Czech market are not described (such as the strong Czech Porter). This is not to imply that the categories below are the full coverage of Czech beers, simply a way of grouping some of the more commonly found types for judging purposes.\nCzech lagers in general are differentiated from German and other Western lagers in that German lagers are almost always fully attenuated, while Czech lagers can have a slight amount of unfermented extract remaining in the finished beer. This helps provide a slightly higher finishing gravity (and thus slightly lower apparent attenuation), slightly fuller body and mouthfeel, and a richer, slightly more complex flavor profile in equivalent color and strength beers. German lagers tend to have a cleaner fermentation profile, while Czech lagers are often fermented cooler (7-10 °C) and for a longer time, and can have a light, barely noticeable (near threshold) amount of diacetyl that often is perceived more as a rounded body than overtly in aroma and flavor [significant buttery diacetyl is a flaw]. Czech lager yeast strains are not always as clean and attenuative as German strains, which helps achieve the higher finishing gravity (along with the mashing methods and cooler fermentation). Czech lagers are traditionally made with decoction mashes (often double decoction), even with modern malts, while most modern German lagers are made with infusion or step infusion mashes. These differences characterize the richness, mouthfeel, and flavor profile that distinguishes Czech lagers.',
    styles: [
      {
        title: '3A. Czech Pale Lager',
        properties: {
          overallImpression:
            'A lighter-bodied, rich, refreshing, hoppy, bitter pale Czech lager having the familiar flavors of the stronger Czech Premium Pale Lager (Pilsner-type) beer but in a lower alcohol, lighter-bodied, and slightly less intense format.',
          aroma:
            'Light to moderate bready-rich malt combined with light to moderate spicy or herbal hop bouquet; the balance between the malt and hops may vary. Faint hint of caramel is acceptable. Light (but never intrusive) diacetyl and light, fruity esters are optional. No sulfur.',
          appearance:
            'Light yellow to deep gold color. Brilliant to very clear, with a long-lasting, creamy white head.',
          flavor:
            'Medium-low to medium bready-rich malt flavor with a rounded, hoppy finish. Low to medium-high spicy or herbal hop flavor. Bitterness is prominent but never harsh. Flavorful and refreshing. Low diacetyl or fruity esters are optional, but should never be overbearing.',
          mouthfeel: 'Medium-light to medium body. Moderate carbonation.',
          comments: 'The Czech name of the style is světlé výčepní pivo.',
          history:
            'Josef Groll initially brewed two types of pale beer in 1842-3, a výčepní and a ležák, with the smaller beer having twice the production; Evan Rail speculates that these were probably 10 °P and 12 °P beers, but that the výčepní could have been weaker. This is the most consumed type of beer in the Czech Republic at present.',
          characteristicIngredients:
            'Soft water with low sulfate and carbonate content. Traditional Czech hops. Czech Pilsner malt. Czech lager yeast. Low ion water provides a distinctively soft, rounded hop profile despite high hopping rates.',
          styleComparison:
            'A lighter-bodied, lower-intensity, refreshing, everyday version of Czech Premium Pale Lager.',
          vitalStatistics: {
            OG: [1.028, 1.044],
            IBUs: [20, 35],
            FG: [1.008, 1.014],
            SRM: [3, 6],
            ABV: [3, 4.1],
          },
          commercialExamples:
            'Bernard světlé pivo 10, Březňák světlé výčepní pivo, Notch Session Pils, Primátor Antonín světlé výčepní, Radegast Rázna 10, Únětické pivo 10°',
          tags: 'session-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pale-lager-family, bitter, hoppy',
        },
      },
      {
        title: '3B. Czech Premium Pale Lager',
        properties: {
          overallImpression:
            'A refreshing pale Czech lager with considerable malt and hop character and a long finish. The malt flavors are complex for a Pilsner-type beer. The bitterness is strong and clean but lacks harshness, which gives a well-balanced, rounded flavor impression that enhances drinkability.',
          aroma:
            'Medium to medium-high bready-rich malt and medium-low to medium-high spicy, floral, or herbal hop bouquet; though the balance between the malt and hops may vary, the interplay is rich and complex. Light diacetyl, or very low fruity esters are optional. Esters tend to increase with gravity.',
          appearance:
            'Medium yellow to deep gold color. Brilliant to very clear clarity. Dense, long-lasting, creamy white head.',
          flavor:
            'Rich, complex, bready maltiness combined with a pronounced yet soft and rounded bitterness and floral and spicy hop flavor. Malt and hop flavors are medium to medium-high, and the malt may contain a slight impression of caramel. Bitterness is prominent but never harsh. The long finish can be balanced towards hops or malt but is never aggressively tilted either way. Light to moderately-low diacetyl and low hop-derived esters are acceptable, but need not be present.',
          mouthfeel: 'Medium body. Moderate to low carbonation.',
          comments:
            'Generally a group of pivo Plzeňského typu, or Pilsner-type beers. This style is a combination of the Czech styles světlý ležák (11-12.9 °P) and světlé speciální pivo (13-14.9 °P). In the Czech Republic, only Pilsner Urquell and Gambrinus are called Pilsner, despite how widely adopted this name is worldwide. Outside the Czech Republic, Czech Pilsner or Bohemian Pilsner are sometimes used to differentiate the beer from other Pilsner-type beers.\nKvasnicové ("yeast beer") versions are popular in the Czech Republic, and may be either kräusened with yeasted wort or given a fresh dose of pure yeast after fermentation. These beers are sometimes cloudy, with subtle yeastiness and enhanced hop character. Modern examples vary in their malt to hop balance and many are not as hop-forward as Pilsner Urquell.',
          history:
            'Commonly associated with Pilsner Urquell, which was first brewed in 1842 after construction of a new brewhouse by burghers dissatisfied with the standard of beer brewed in Plzeň. Bavarian brewer Josef Groll is credited with first brewing the beer, although there may have been earlier pale lagers in Bohemia. Just as important as the lager yeast was the use of English malting techniques.',
          characteristicIngredients:
            'Traditional Czech hops. Czech malt. Czech lager yeast. Water low in sulfate and carbonate provides a distinctively soft, rounded hop profile despite high hopping rates. The bitterness level of some larger commercial examples has dropped in recent years, although not as much as in many contemporary German examples.',
          styleComparison:
            'More color, malt richness, and body than a German Pils, with a fuller finish and a cleaner, softer impression. Stronger than a Czech Pale Lager.',
          vitalStatistics: {
            OG: [1.044, 1.06],
            IBUs: [30, 45],
            FG: [1.013, 1.017],
            SRM: [3.5, 6],
            ABV: [4.2, 5.8],
          },
          commercialExamples:
            'Bernard světlé ležák 12°, Budvar 33 světlý ležák, Pilsner Urquell, Pivovar Jihlava Ježek 11%, Primátor Premium lager, Radegast Ryze hořká 12, Únětická pivo 12°',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pilsner-family, balanced, hoppy',
        },
      },
      {
        title: '3C. Czech Amber Lager',
        properties: {
          overallImpression:
            'A malty amber Czech lager with a hop character that can vary from low to quite significant. The malt flavors also can vary, leading to different interpretations and balances ranging from drier, bready, and slightly biscuity to sweeter and somewhat caramel-like.',
          aroma:
            'Moderate intensity, rich malt aroma that can be either bready and Maillard product-dominant or slightly caramelly sweet. Spicy, floral, or herbal hop character may be moderate to none. Clean lager character, though low fruity esters (stone fruit or berries) may be present. Low diacetyl optional.',
          appearance: 'Deep amber to copper color. Clear to bright clarity. Large, off-white, persistent head.',
          flavor:
            'Complex malt flavor is dominant (medium to medium-high), though its nature may vary from dry and Maillard product-dominant to caramelly and almost sweet. Some examples have a candy-like to graham-cracker malt character. Low to moderate spicy hop flavor. Prominent but clean hop bitterness provides a balanced finish. Subtle plum or berry esters optional. Low diacetyl optional. No roasted malt flavor. Finish may vary from dry and hoppy to relatively sweet.',
          mouthfeel:
            'Medium-full to medium body. Soft and round, often with a gentle creaminess. Moderate to low carbonation.',
          comments:
            'The Czech name of the style is polotmavé pivo, which translates as half-dark beer. This style is a combination of the Czech styles polotmavý ležák (11-12.9 °P) and polotmavé speciální pivo (13-14.9 °P). Some versions may be a blend of pale and dark lagers.',
          history:
            'A Vienna-style lager which has continued to be brewed in the Czech Republic. A resurgence of small breweries opening in the Czech Republic has increased the number of examples of this style.',
          characteristicIngredients:
            'Pilsner and caramel malts, but Vienna and Munich malts may also be used. Low mineral content water. Traditional Czech hops. Czech lager yeast.',
          styleComparison:
            'The style can be similar to a Vienna Lager but with stronger Czech late hop character, or that approaching a British Bitter but significantly richer with more of a deep caramel character. Large brewery versions are generally similar to Czech Premium Pale Lager with slightly darker malt flavors and less hop, while smaller breweries often make versions with considerable hop character, malt complexity, or residual sweetness.',
          vitalStatistics: {
            OG: [1.044, 1.06],
            IBUs: [20, 35],
            FG: [1.013, 1.017],
            SRM: [10, 16],
            ABV: [4.4, 5.8],
          },
          commercialExamples:
            'Bernard Jantarový ležák 12°, Gambrinus Polotmavá 12°, Kozel Semi-Dark, Lobkowicz Démon 13, Primátor 13 polotmavé, Strakonický Dudák Klostermann polotmavý ležák',
          tags: 'standard-strength, amber-color, bottom-fermented, lagered, central-europe, traditional-style, amber-lager-family, balanced',
        },
      },
      {
        title: '3D. Czech Dark Lager',
        properties: {
          overallImpression:
            'A rich, dark, malty Czech lager with a roast character that can vary from almost absent to quite prominent. Malty balance and an interesting and complex flavor profile, with variable levels of hopping that provides a range of possible interpretations.',
          aroma:
            'Medium to medium-high rich, deep, sometimes sweet maltiness, with optional qualities such as bread crusts, toast, nuts, cola, dark fruit, or caramel. Roasted malt characters such as chocolate or sweetened coffee can vary from moderate to none but should not overwhelm the base malt character. Low to moderate spicy hop aroma optional. Low diacetyl and low to moderate fruity esters (plums or berries) may be present.',
          appearance:
            'Dark copper to almost black color, often with a red or garnet tint. Clear to bright clarity. Large, off-white to tan, persistent head.',
          flavor:
            'Medium to medium-high deep, complex maltiness dominates, typically with malty-rich Maillard products and a light to moderate residual malt sweetness. Malt flavors such as caramel, toast, nuts, licorice, dried dark fruit, chocolate, or coffee may also be present, with very low to moderate roast character. Low to moderate spicy hop flavor. Moderate to medium-low bitterness, but should be perceptible. Balance can vary from malty to relatively well-balanced to gently hop-forward. Low to moderate diacetyl and light plum or berry esters may be present.',
          mouthfeel:
            'Medium to medium-full body, considerable mouthfeel without being heavy or cloying. Moderately creamy in texture. Smooth. Moderate to low carbonation. Can have a slight alcohol warmth in stronger versions.',
          comments:
            'This style is a combination of the Czech styles tmavý ležák (11-12.9 °P) and tmavé speciální pivo (13-14.9 °P). More modern examples are drier and have higher bitterness while traditional versions often have IBUs in the 18-20 range with a sweeter balance.',
          history:
            'The U Fleků brewery has been operating in Prague since 1499, and produces the best-known version. Many small, new breweries are brewing this style.',
          characteristicIngredients:
            'Pilsner and dark caramel malts with the addition of debittered roasted malts are most common, but additions of Vienna or Munich malt are also appropriate. Low mineral content water. Traditional Czech hops. Czech lager yeast.',
          styleComparison:
            'The beer is the Czech equivalent of a dark lager ranging in character from Munich Dunkel to Schwarzbier, but typically with greater malt richness and hop aroma, flavor, and bitterness.',
          vitalStatistics: {
            OG: [1.044, 1.06],
            IBUs: [18, 34],
            FG: [1.013, 1.017],
            SRM: [17, 35],
            ABV: [4.4, 5.8],
          },
          commercialExamples:
            'Bernard černý ležák 12°, Budvar tmavý ležák, Herold tmavé silné pivo 13°, Kozel Dark , Krušovice  černé, Primátor dark lager, U Fleků Flekovský tmavý ležák 13°',
          tags: 'standard-strength, dark-color, bottom-fermented, lagered, central-europe, traditional-style, dark-lager-family, balanced',
        },
      },
    ],
  },
  {
    title: '4. Pale Malty European Lager',
    description:
      'This style category contains pale German lagers of vollbier to starkbier strength that emphasize the flavor of Pilsner malt in the balance while remaining well-attenuated.',
    styles: [
      {
        title: '4A. Munich Helles',
        properties: {
          overallImpression:
            'A gold-colored German lager with a smooth, malty flavor and a soft, dry finish. Subtle spicy, floral, or herbal hops and restrained bitterness help keep the balance malty but not sweet, which helps make this beer a refreshing, everyday drink.',
          aroma:
            'Moderate grainy-sweet malt aroma. Low to moderately-low spicy, floral, or herbal hop aroma. Pleasant, clean fermentation profile, with malt dominating the balance. The freshest examples will have more of a malty-sweet aroma.',
          appearance: 'Pale yellow to pale gold. Clear. Persistent creamy white head.',
          flavor:
            'Moderately malty start with the suggestion of sweetness, moderate grainy-sweet malt flavor with a soft, rounded palate impression, supported by a low to medium-low bitterness. Soft and dry finish, not crisp and biting. Low to moderately-low spicy, floral, or herbal hop flavor. Malt dominates hops in the palate, finish, and aftertaste, but hops should be noticeable. No residual sweetness, simply the impression of maltiness with restrained bitterness. Clean fermentation profile.',
          mouthfeel: 'Medium body. Medium carbonation. Smooth, well-lagered character.',
          comments:
            'Very fresh examples can have a more prominent malt and hop character that fades over time, as is often noticed in exported beers. Helles in Munich tends to be a lighter version than those outside the city. May be called Helles Lagerbier.',
          history:
            'Created in Munich in 1894 to compete with pale Pilsner-type beers, often first credited to Spaten. More popular in Southern Germany.',
          characteristicIngredients: 'Continental Pilsner malt. Traditional German hops. Clean German lager yeast.',
          styleComparison:
            'Similar in malt balance and bitterness to Munich Dunkel, but less malty-sweet in nature and pale rather than dark and rich. More body and malt presence than a German Pils, but less crisp and with less hop character throughout. Similar malt profile as a German Helles Exportbier, but with fewer hops in the balance and slightly less alcohol. Less body and alcohol than a Festbier.',
          vitalStatistics: {
            OG: [1.044, 1.048],
            IBUs: [16, 22],
            FG: [1.006, 1.012],
            SRM: [3, 5],
            ABV: [4.7, 5.4],
          },
          commercialExamples:
            'Augustiner Lagerbier Hell, Hacker-Pschorr Münchner Gold, Löwenbraü Original, Paulaner Münchner Lager, Schönramer Hell, Spaten Münchner Hell, Weihenstephaner Original Helles',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pale-lager-family, malty',
        },
      },
      {
        title: '4B. Festbier',
        properties: {
          overallImpression:
            'A smooth, clean, pale German lager with a moderately strong malty flavor and a light hop character. Deftly balances strength and drinkability, with a palate impression and finish that encourages drinking. Showcases elegant German malt flavors without becoming too heavy or filling.',
          aroma:
            'Moderate malty richness, with an emphasis on toasty-doughy aromatics and an impression of sweetness. Low to medium-low floral, herbal, or spicy hops. The malt should not have a deeply toasted, caramel, or biscuity quality. Clean lager fermentation profile.',
          appearance:
            'Deep yellow to deep gold color; should not have amber hues. Bright clarity. Persistent white to off-white foam stand. Most commercial examples are pale gold in color.',
          flavor:
            'Medium to medium-high malty flavor initially, with a lightly toasty, bread dough quality and an impression of soft malty richness. Medium to medium-low bitterness, definitely malty in the balance. Well-attenuated and crisp, but not dry. Medium-low to medium floral, herbal, or spicy hop flavor. Clean fermentation profile. The taste is mostly of Pils malt, but with slightly toasty hints. The bitterness is supportive, but still should yield a malty, flavorful finish.',
          mouthfeel:
            'Medium body, with a smooth, somewhat creamy texture. Medium carbonation. Alcohol strength barely noticeable as warming, if at all.',
          comments:
            'This style represents the modern German beer served at Oktoberfest (although it is not solely reserved for Oktoberfest; it can be found at many other \'fests\'), and is sometimes called Wiesn ("the meadow" or local name for the Oktoberfest festival). We chose to call this style Festbier since by German and EU regulations, Oktoberfestbier is a protected appellation for beer produced at large breweries within the Munich city limits for consumption at Oktoberfest. Other countries are not bound by these rules, so many craft breweries in the US produce beer called Oktoberfest, but based on the traditional style described in these guidelines as Märzen. May be called Helles Märzen.',
          history:
            'Since 1990, the majority of beer served at Oktoberfest in Munich has been this style. Export beer specifically made for the United States is still mainly of the traditional amber style, as are US-produced interpretations. Paulaner first created the golden version in the mid-1970s because they thought the traditional Oktoberfest was too filling. So they developed a lighter, more drinkable but still malty version that they wanted to be "more poundable" (according to the head brewer at Paulaner). But the actual type of beer served at Oktoberfest is set by a Munich city committee.',
          characteristicIngredients:
            'Majority Pils malt, but with some Vienna or Munich malt to increase maltiness. Differences in commercial examples are mostly due to different maltsters and yeast, not major grist differences.',
          styleComparison:
            'Less intense and less richly toasted than a Märzen. Stronger than a Munich Helles, with a bit more body, and hop and malt flavor. Less rich in malt intensity than a Helles Bock. The malt complexity is similar to a higher-gravity Czech Premium Pale Lager, although without the associated hops.',
          vitalStatistics: {
            OG: [1.054, 1.057],
            IBUs: [18, 25],
            FG: [1.01, 1.012],
            SRM: [4, 6],
            ABV: [5.8, 6.3],
          },
          commercialExamples:
            'Augustiner Oktoberfest, Hacker-Pschorr Superior Festbier, Hofbräu Oktoberfestbier, Löwenbräu Oktoberfestbier, Paulaner Oktoberfest Bier, Weihenstephaner Festbier',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pale-lager-family, malty',
        },
      },
      {
        title: '4C. Helles Bock',
        properties: {
          overallImpression:
            'A relatively pale, strong, malty German lager with a nicely attenuated finish that enhances drinkability. The hop character is generally more apparent and the malt character less deeply rich than in other Bocks.',
          aroma:
            'Moderate to strong grainy-sweet malt aroma, often with a lightly toasted quality and low Maillard products. Moderately-low spicy, herbal, or floral hop aroma optional. Clean fermentation profile. Low fruity esters optional. Very light alcohol optional.',
          appearance:
            'Deep gold to light amber in color. Bright to clear clarity. Large, creamy, persistent, white head.',
          flavor:
            'Moderately to moderately strong grainy-sweet, doughy, bready, or lightly toasty malt flavor dominates with some rich Maillard products providing added interest. Few caramel flavors optional. Low to moderate spicy, herbal, floral, peppery hop flavor optional, but present in the best examples. Moderate hop bitterness, more so in the balance than in other Bocks. Clean fermentation profile. Well-attenuated, not cloying, with a moderately-dry finish that may taste of both malt and hops.',
          mouthfeel:
            'Medium-bodied. Moderate to moderately-high carbonation. Smooth and clean with no harshness or astringency, despite the increased hop bitterness. Light alcohol warming optional.',
          comments:
            'Also known as Maibock. Compared to darker Bock beers, the hops compensate for the lower level of Maillard products in the balance.',
          history:
            'A fairly recent development in comparison to the other members of the bock family. The serving of Maibock is a seasonal offering associated with springtime and the month of May, and may include a wider color and hopping range than is seen in exported products.',
          characteristicIngredients:
            'A mix of Pils, Vienna, and Munich malts. No adjuncts. Light use of pale crystal type malts possible. Traditional German hops. Clean lager yeast. Decoction mash is traditional, but boiling is less than in Dunkles Bock to restrain color development. Soft water.',
          styleComparison:
            'Can be thought of as either a pale version of a Dunkles Bock, or a Munich Helles or Festbier brewed to bock strength. While quite malty, this beer typically has less dark and rich malt flavors, and can be drier, hoppier, and more bitter than a Dunkles Bock. Less strong than a pale Doppelbock, but with similar flavors.',
          vitalStatistics: {
            OG: [1.064, 1.072],
            IBUs: [23, 35],
            FG: [1.011, 1.018],
            SRM: [6, 9],
            ABV: [6.3, 7.4],
          },
          commercialExamples:
            "Altenmünster Maibock, Ayinger Maibock, Chuckanut Maibock, Einbecker Mai-Ur-Bock, Hofbräu Maibock, Mahr's Heller Bock",
          tags: 'high-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, bock-family, malty',
        },
      },
    ],
  },
  {
    title: '5. Pale Bitter European Beer',
    description:
      'This category describes German-origin beers that are pale and have an even to bitter balance with a mild to moderately strong hoppy character featuring traditional German hops. They are generally bottom-fermented or are lagered to provide a smooth profile, and are well-attenuated as are most German beers.',
    styles: [
      {
        title: '5A. German Leichtbier',
        properties: {
          overallImpression:
            'A pale, highly-attenuated, light-bodied German lager with lower alcohol and calories than standard-strength beers. Moderately bitter with noticeable malt and hop flavors, the beer is still interesting to drink.',
          aroma:
            'Low to medium hop aroma, with a spicy, herbal, or floral character. Low to medium-low grainy-sweet or slightly crackery malt aroma. Clean fermentation profile.',
          appearance:
            'Pale straw to deep yellow in color. Brilliant clarity. Moderate white head with average to below average persistence.',
          flavor:
            'Low to medium grainy-sweet malt flavor initially. Medium hop bitterness. Low to medium hop flavor, with a spicy, herbal, or floral quality. Clean fermentation character, well-lagered. Dry finish with a light malty and hoppy aftertaste.',
          mouthfeel: 'Light to very light body. Medium to high carbonation. Smooth, well-attenuated.',
          comments:
            'Marketed primarily as a diet-oriented beer with lower carbohydrates, alcohol, and calories. Pronounced "LYESHT-beer." May also be known as a Diat Pils or Helles, this style is in the schankbier gravity class. Other variations of Leicht class beers can be made from Weissbier, Kölsch, and Altbier; those beers are best entered as 34B Mixed-Style Beer.',
          history:
            'Traditional versions existed as drinks for physical laborers in factories or fields, but modern versions are more based on popular American products in the same class and targeted towards health or fitness conscious consumers. Increasingly supplanted in the current market by non-alcoholic beers and radlers.',
          characteristicIngredients: 'Continental Pils malt. German lager yeast. Traditional German hops.',
          styleComparison:
            'Like a lower-alcohol, lighter-bodied, slightly less aggressive German Pils or Munich Helles. More bitter and flavorful than an American Light Lager.',
          vitalStatistics: {
            OG: [1.026, 1.034],
            IBUs: [15, 28],
            FG: [1.006, 1.01],
            SRM: [1.5, 4],
            ABV: [2.4, 3.6],
          },
          commercialExamples:
            'Autenrieder Schlossbräu Leicht, Greif Bräu Leicht, Hohenthanner Tannen Hell Leicht, Müllerbrau Heimer Leicht, Schönramer Surtaler Schankbier, Waldhaus Sommer Bier',
          tags: 'session-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pale-lager-family, bitter, hoppy',
        },
      },
      {
        title: '5B. Kölsch',
        properties: {
          overallImpression:
            'A subtle, brilliantly clear, pale beer with a delicate balance of malt, fruit, and hop character, moderate bitterness, and a well-attenuated but soft finish. Freshness makes a huge difference with this beer, as the delicate character can fade quickly with age.',
          aroma:
            'Low to very low grainy-sweet malt aroma. A subtle fruit aroma (apple, pear, or sometimes cherry) is optional, but welcome. Low floral, spicy, or herbal hop aroma optional. The intensity of aromatics is fairly subtle but generally balanced, clean, fresh, and pleasant.',
          appearance: 'Medium yellow to light gold. Brilliant clarity. Has a delicate white head that may not persist.',
          flavor:
            'A delicate flavor balance between malt, fruitiness, bitterness, and hops, with a clean, well-attenuated finish. The medium to medium-low grainy maltiness may have very light bready or honey notes. The fruitiness can have an almost imperceptible sweetness. Medium-low to medium bitterness. Low to moderately-high floral, spicy, or herbal hop flavor; most are medium-low to medium. May have a neutral-grainy to light malty sweet impression at the start. Soft, rounded palate. Finish is soft, dry, and slightly crisp, not sharp or biting. No noticeable residual sweetness. While the balance between the flavor components can vary, none are ever strong.',
          mouthfeel:
            'Medium-light to medium body; most are medium-light. Medium to medium-high carbonation. Smooth and soft, but well-attenuated and not heavy. Not harsh.',
          comments:
            'A traditional top-fermented, lagered beer from Cologne, Germany (Köln). Köln breweries differentiate themselves through balance, so allow for a range of variation within the style when judging. Drier versions may seem hoppier or more bitter than the IBU levels might suggest. The delicate flavor profile does not age well, so be alert for oxidation defects. Served in Köln in a tall, narrow 20cl glass called a Stange.',
          history:
            'Köln has a top-fermenting brewing tradition since the Middle Ages, but the beer now known as Kölsch was developed in the late 1800s as an alternative to pale lagers. Bottom fermentation was actually prohibited in Cologne. Kölsch is an appellation protected by the Kölsch Konvention (1986), and is restricted to breweries in and around Köln. The Konvention simply defines the beer as a "light, highly attenuated, hop-accentuated, clear, top-fermenting Vollbier."',
          characteristicIngredients:
            'Traditional German hops. German Pils, Pale, or Vienna malt. Attenuative, clean German ale yeast. Occasional small use of wheat malt. Current commercial practice is to ferment around 15 °C, cold condition near freezing for up to a month, and serve fresh.',
          styleComparison: 'Can be mistaken for a Cream Ale or somewhat subtle German Pils.',
          vitalStatistics: {
            OG: [1.044, 1.05],
            IBUs: [18, 30],
            FG: [1.007, 1.011],
            SRM: [3.5, 5],
            ABV: [4.4, 5.2],
          },
          commercialExamples:
            'Früh Kölsch, Gaffel Kölsch, Mühlen Kölsch, Päffgen Kolsch, Reissdorf Kölsch, Sion Kölsch, Sünner Kölsch',
          tags: 'standard-strength, pale-color, top-fermented, lagered, central-europe, traditional-style, pale-ale-family, balanced',
        },
      },
      {
        title: '5C. German Helles Exportbier',
        properties: {
          overallImpression:
            'A golden German lager balancing a smooth malty profile with a bitter, hoppy character in a slightly above-average body and strength beer.',
          aroma:
            'Medium-low to medium floral, spicy, or herbal hop aroma. Moderate grainy-sweet malt aroma, possibly with light toasty, bready, or doughy notes. Clean fermentation profile. Hops and malt both noticeable, and generally balanced.',
          appearance: 'Medium yellow to deep gold. Clear. Persistent white head.',
          flavor:
            'Moderate, balanced malt and hops with supporting bitterness. Malt and hop flavors similar to aroma (same descriptors and intensities). Medium, noticeable bitterness, full on the palate, with a medium-dry finish. Clean fermentation character. Aftertaste of both malt and hops, generally in balance. Mineral character typically perceived more as a roundness and fullness of flavor, and a dry, flinty sharpness in the finish rather than overt mineral flavors. Background sulfate optional.',
          mouthfeel:
            'Medium to medium-full body. Medium carbonation. Smooth and mellow on the palate. Very slight warmth may be noted in stronger versions.',
          comments:
            'Also known Dortmunder Export, Dortmunder, Export, or simply a Dort. Called Export within Germany, and often Dortmunder elsewhere, Export is also a beer strength descriptor under German brewing tradition, and could be applied to other styles. Splits the difference between a German Pils and a Munich Helles in several aspects: color, hop-malt balance, finish, bitterness.',
          history:
            'Developed in Dortmund in the Ruhr industrial region in the 1870s in response to pale Pilsner-type beers. It became very popular after World War II but declined in the 1970s. Other Export-class beers developed independently, and reflected a slightly stronger version of existing beers.',
          characteristicIngredients:
            'Minerally water with high levels of sulfates, carbonates, and chlorides. Traditional German or Czech hops. Pilsner malt. German lager yeast. Decoction mash traditional.',
          styleComparison:
            'Less finishing hops and more body than a German Pils. More bitter and drier than a Munich Helles. Stronger, drier, but less hoppy than a Czech Premium Pale Lager.',
          vitalStatistics: {
            OG: [1.05, 1.058],
            IBUs: [20, 30],
            FG: [1.008, 1.015],
            SRM: [4, 6],
            ABV: [5, 6],
          },
          commercialExamples:
            'Chuckanut Export Dortmunder Lager, DAB Dortmunder Export, Dortmunder Kronen, Landshuter Edel Hell, Müllerbräu Export Gold, Schönramer Gold',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pale-lager-family, balanced',
        },
      },
      {
        title: '5D. German Pils',
        properties: {
          overallImpression:
            'A pale, dry, bitter German lager featuring a prominent hop aroma. Crisp, clean, and refreshing, showing a brilliant gold color with excellent head retention.',
          aroma:
            'Moderately to moderately-high flowery, spicy, or herbal hops. Low to medium grainy, sweet, or doughy malt character, often with a light honey and toasted cracker quality. Clean fermentation profile. The hops should be forward, but not totally dominate the malt in the balance.',
          appearance: 'Straw to deep yellow, brilliant to very clear, with a creamy, long-lasting white head.',
          flavor:
            'Initial malt flavor quickly overcome with hop flavor and bitterness, leading into a dry, crisp finish. Malt and hop flavors similar to aroma (same descriptors and intensities). Medium to high bitterness, lingering into the aftertaste along with a touch of malt and hops. Clean fermentation profile. Minerally water can accentuate and lengthen the dry finish. Hops and malt can fade with age, but the beer should always have a bitter balance.',
          mouthfeel:
            'Medium-light body. Medium to high carbonation. Should not feel heavy. Not harsh, but may have a flinty, minerally, sharpness in some examples.',
          comments:
            "Modern examples of Pils tend to become paler in color, drier and sharper in finish, and more bitter moving from South to North in Germany, often mirroring increasing sulfates in the water. Pils found in Bavaria tend to be a bit softer in bitterness with more malt flavor and late hop character, yet still with sufficient hops and crispness of finish to differentiate itself from Munich Helles. The use of the term 'Pils' is more common in Germany than 'Pilsner' to differentiate it from the Czech style, and (some say) to show respect.",
          history:
            'Adapted from Czech Pilsner to suit brewing conditions in Germany, particularly water with higher mineral content and domestic hop varieties. First brewed in Germany in the early 1870s. Became more popular after WWII as German brewing schools emphasized modern techniques. Along with its cousin Czech Pilsner, it is the ancestor of the most widely produced beer styles today.',
          characteristicIngredients: 'Continental Pilsner malt. Traditional German hops. Clean German lager yeast.',
          styleComparison:
            'Lighter in body and color, drier, crisper, more fully attenuated, more lingering bitterness, and higher carbonation than a Czech Premium Pale Lager. More hop character, malt flavor, and bitterness than International Pale Lager. More hop character and bitterness with a drier, crisper finish than a Munich Helles; the Helles has more malt intensity, but of the same character as the German Pils.',
          vitalStatistics: {
            OG: [1.044, 1.05],
            IBUs: [22, 40],
            FG: [1.008, 1.013],
            SRM: [2, 4],
            ABV: [4.4, 5.2],
          },
          commercialExamples:
            'ABK Pils Anno 1907, Jever Pilsener, König Pilsener, Paulaner Pils, Bierstadt Slow-Pour Pils, Rothaus Pils, Schönramer Pils, Trumer Pils',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, central-europe, traditional-style, pilsner-family, bitter, hoppy',
        },
      },
    ],
  },
  {
    title: '6. Amber Malty European Lager',
    description:
      'This category groups amber-colored, German-origin, bottom-fermented lagerbiers that have a malty balance and are vollbier to starkbier in strength.',
    styles: [
      {
        title: '6A. Märzen',
        properties: {
          overallImpression:
            'An amber, malty German lager with a clean, rich, toasty, bready malt flavor, restrained bitterness, and a well-attenuated finish. The overall malt impression is soft, elegant, and complex, with a rich malty aftertaste that is never cloying or heavy.',
          aroma:
            'Moderate malty aroma, typically rich, bready, somewhat toasty, with light bread crust notes. Clean lager fermentation character. Very low floral, herbal, or spicy hop aroma optional. Caramel-sweet, biscuity-dry, or roasted malt aromas are inappropriate. Very light alcohol might be detected, but should never be sharp. Clean, elegant malt richness should be the primary aroma.',
          appearance:
            'Amber-orange to deep reddish-copper color; should not be golden. Bright clarity, with persistent, off-white foam stand.',
          flavor:
            'Moderate to high rich malt flavor often initially suggests sweetness, but the finish is moderately-dry to dry. Distinctive and complex maltiness often includes a bready, toasty aspect. Hop bitterness is moderate, and the floral, herbal, or spicy hop flavor is low to none. Hops provide sufficient balance that the malty palate and finish do not seem sweet. The aftertaste is malty, with the same elegant, rich malt flavors lingering. Noticeable sweet caramel, dry biscuit, or roasted flavors are inappropriate. Clean fermentation profile.',
          mouthfeel:
            'Medium body, with a smooth, creamy texture that often suggests a fuller mouthfeel. Medium carbonation. Fully attenuated, without a sweet or cloying impression. May be slightly warming, but the strength should be relatively hidden.',
          comments:
            "Modern domestic German Oktoberfest versions are golden - see the Festbier style for this version. Export German versions (to the United States, at least) are typically orange-amber in color, have a distinctive toasty malt character, and are often labeled Oktoberfest. Many craft versions of Oktoberfest are based on this style. Historic versions of the beer tended to be darker, towards the brown color range, but there have been many 'shades' of Märzen (when the name is used as a strength); this style description specifically refers to the stronger amber lager version. The modern Festbier can be thought of as a lighter-bodied, pale Märzen by these terms.",
          history:
            'As the name suggests, brewed as a stronger "March beer" in March and lagered in cold caves over the summer. Modern versions trace back to the lager developed by Spaten in 1841, contemporaneous to the development of Vienna lager. However, the Märzen name is much older than 1841 - the early ones were dark brown, and the name implied a strength band (14 °P) rather than a style. The amber lager style served at Oktoberfest from 1872 until 1990 when the golden Festbier was adopted as the standard festival beer.',
          characteristicIngredients:
            'Grist varies, although traditional German versions emphasized Munich malt. The notion of elegance is derived from the finest quality ingredients, particularly the base malts. A decoction mash is traditional, and enhances the rich malt profile.',
          styleComparison:
            'Not as strong and rich as a Dunkles Bock. More malt depth and richness than a Festbier, with a heavier body and slightly less hops. Less hoppy but equally malty as a Czech Amber Lager, but with a different malt profile.',
          vitalStatistics: {
            OG: [1.054, 1.06],
            IBUs: [18, 24],
            FG: [1.01, 1.014],
            SRM: [8, 17],
            ABV: [5.6, 6.3],
          },
          commercialExamples:
            'Hacker-Pschorr Oktoberfest Märzen, Hofmark Märzen, Paulaner Oktoberfest, Saalfelder Ur-Saalfelder, Weltenburger Kloster Anno 1050',
          tags: 'standard-strength, amber-color, bottom-fermented, lagered, central-europe, traditional-style, amber-lager-family, malty',
        },
      },
      {
        title: '6B. Rauchbier',
        properties: {
          overallImpression:
            'A beechwood-smoked, malty, amber German lager. The expected Märzen profile of toasty-rich malt, restrained bitterness, clean fermentation, and a relatively dry finish is enhanced by a noticeable to intense smoke character.',
          aroma:
            'Blend of smoke and malt, varying in balance and intensity. The beechwood smoke character can range from subtle to fairly strong, and can seem smoky, woody, or bacon-like. The malt character can be low to moderate, and be somewhat rich, toasty, or malty-sweet. The malt and smoke components are often inversely proportional (i.e., when smoke increases, malt decreases, and vice versa). Low floral or spicy hop aroma optional. Clean fermentation profile.',
          appearance:
            'Very clear, with a large, creamy, rich, tan- to cream-colored head. Deep amber to coppery-brown in color, often a little darker than the underlying Märzen style.',
          flavor:
            "Generally follows the aroma profile, with a blend of smoke and malt in varying balance and intensity, yet always mutually supportive. Märzen-like qualities should be evident, particularly a malty, toasty richness, but the beechwood smoke flavor can be low to high. The palate can be somewhat malty, rich, and sweet, yet the finish tends to be medium-dry to dry with the smoke character sometimes enhancing the dryness of the finish. The aftertaste can reflect both malt richness and smoke flavors, with a balanced presentation desirable. Moderate, balanced, hop bitterness. Can have up to a moderate hop flavor with spicy, floral, or herbal notes. Clean lager fermentation character.\nThe quality and character of the smoke is important; it should be cleanly smoky. At higher levels, the smoke can take on a ham- or bacon-like character, which is acceptable as long as it doesn't veer into the greasy range. Harsh, bitter, burnt, acrid, charred, rubbery, sulfury, or creosote-like smoky-phenolic flavors are inappropriate.",
          mouthfeel:
            'Medium body. Medium to medium-high carbonation. Smooth lager character. Significant astringent, phenolic harshness is inappropriate.',
          comments:
            'Literally smoke beer in German. The smoke character and intensity varies by maltster and brewery, so allow for variation in the style when judging - not all examples are highly smoked. Many other traditional German styles are smoked; those should be entered in the 32A Classic Style Smoked Beer style. This style is only for the more common Märzen-based beer.',
          history:
            'A historical specialty of the city of Bamberg, in the Franconian region of Bavaria in Germany. While smoked beers certainly were made long ago, the origins of this specific style are unclear but must have been developed after Märzen was created.',
          characteristicIngredients:
            'Märzen-type grist, with the addition of a sizeable quantity of German Rauchmalz (beechwood-smoked Vienna-type malt). Some breweries smoke their own malt. German lager yeast. Traditional German or Czech hops.',
          styleComparison:
            'Like a Märzen with but with a balanced, sweet, smoky aroma and flavor and a somewhat darker color.',
          vitalStatistics: {
            OG: [1.05, 1.057],
            IBUs: [20, 30],
            FG: [1.012, 1.016],
            SRM: [12, 22],
            ABV: [4.8, 6],
          },
          commercialExamples:
            'Cervejaria Bamberg Rauchbier, Göller Rauchbier, Rittmayer Rauchbier, Schlenkerla Rauchbier Märzen, Spezial Rauchbier Märzen',
          tags: 'standard-strength, amber-color, bottom-fermented, lagered, central-europe, traditional-style, amber-lager-family, malty, smoke',
        },
      },
      {
        title: '6C. Dunkles Bock',
        properties: {
          overallImpression:
            'A strong, dark, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.',
          aroma:
            'Medium to medium-high rich bready-malty aroma, often with moderate amounts of rich Maillard products or toasty overtones. Virtually no hop aroma. Some alcohol may be noticeable. Clean lager character, although a slight dark fruit character is allowable.',
          appearance:
            'Light copper to brown color, often with attractive garnet highlights. Good clarity despite the dark color. Large, creamy, persistent, off-white head.',
          flavor:
            'Medium to medium-high complex, rich maltiness is dominated by toasty-rich Maillard products. Some dark caramel notes may be present. Hop bitterness is generally only high enough to support the malt flavors, allowing a bit of malty sweetness to linger into the finish. Well-attenuated, not cloying. Clean fermentation profile, although the malt can provide a slight dark fruit character. No hop flavor. No roasted, burnt, or dry biscuity character.',
          mouthfeel:
            'Medium to medium-full bodied. Moderate to moderately low carbonation. Some alcohol warmth may be found, but should never be hot. Smooth, without harshness or astringency.',
          comments:
            'Decoction mashing plays an important part of flavor development, as it enhances the caramel and Maillard flavor aspects of the malt.',
          history:
            'Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. "Bock" translates to "Ram" in German, which is why the animal is often used in logos and advertisements.',
          characteristicIngredients:
            'Munich and Vienna malts, rarely a tiny bit of dark roasted malts for color adjustment, never any non-malt adjuncts. Continental European hop varieties are used. Clean German lager yeast.',
          styleComparison:
            'Darker, with a richer malty flavor and less apparent bitterness than a Helles Bock. Less alcohol and malty richness than a Doppelbock. Stronger malt flavors and higher alcohol than a Märzen. Richer, less attenuated, and less hoppy than a Czech Amber Lager.',
          vitalStatistics: {
            OG: [1.064, 1.072],
            IBUs: [20, 27],
            FG: [1.013, 1.019],
            SRM: [14, 22],
            ABV: [6.3, 7.2],
          },
          commercialExamples:
            "Aass Bock, Einbecker Ur-Bock Dunkel, Kneitinger Bock, Lindeboom Bock, Schell's Bock, Penn Brewery St. Nikolaus Bock",
          tags: 'high-strength, amber-color, bottom-fermented, lagered, central-europe, traditional-style, bock-family, malty',
        },
      },
    ],
  },
  {
    title: '7. Amber Bitter European Beer',
    description:
      'This category groups amber-colored, evenly balanced to bitter balanced beers of German or Austrian origin.',
    styles: [
      {
        title: '7A. Vienna Lager',
        properties: {
          overallImpression:
            'A moderate-strength continental amber lager with a soft, smooth maltiness and a balanced, moderate bitterness, yet finishing relatively dry. The malt flavor is clean, bready-rich, and somewhat toasty, with an elegant impression derived from quality base malts and process, not specialty malts or adjuncts.',
          aroma:
            'Moderately-intense malt aroma, with toasty and malty-rich accents. Floral, spicy hop aroma may be low to none. Clean lager character. A significant caramel, biscuity, or roasted aroma is inappropriate.',
          appearance: 'Light reddish amber to copper color. Bright clarity. Large, off-white, persistent head.',
          flavor:
            'Soft, elegant malt complexity is in the forefront, with a firm enough hop bitterness to provide a balanced finish. The malt flavor tends towards a rich, toasty character, without significant caramel, biscuity, or roast flavors. Fairly dry, soft finish, with both rich malt and hop bitterness present in the aftertaste. Floral, spicy, or herbal hop flavor may be low to none. Clean fermentation profile.',
          mouthfeel: 'Medium-light to medium body, with a gentle creaminess. Moderate carbonation. Smooth.',
          comments:
            'A standard-strength everyday beer, not a beer brewed for festivals. Many traditional examples have become sweeter and more adjunct-laden, now seeming more like International Amber or Dark Lagers.',
          history:
            'Developed by Anton Dreher in Vienna in 1841, became popular in the mid-late 1800s. The style was brought to Mexico by Santiago Graf and other Austrian immigrant brewers in the late 1800s. Seems to be embraced as a modern craft style in other countries.',
          characteristicIngredients:
            'Traditionally, best-quality Vienna malt, but can also use Pils and Munich malts. Traditional continental hops. Clean German lager yeast. May use small amounts of specialty malts for color and sweetness.',
          styleComparison:
            'Similar malt flavor as a Märzen, but lighter in intensity, and body, with a touch more bitterness and dryness in the balance. Lower in alcohol than Märzen or Festbier. Less rich, malty, and hoppy than Czech Amber Lager.',
          vitalStatistics: {
            OG: [1.048, 1.055],
            IBUs: [18, 30],
            FG: [1.01, 1.014],
            SRM: [9, 15],
            ABV: [4.7, 5.5],
          },
          commercialExamples:
            "Chuckanut Vienna Lager, Devils Backbone Vienna Lager, Figueroa Mountain Red Lager, Heavy Seas Cutlass, Ottakringer Wiener Original, Schell's Firebrick, Theresianer Vienna",
          tags: 'standard-strength, amber-color, bottom-fermented, lagered, central-europe, traditional-style, amber-lager-family, balanced',
        },
      },
      {
        title: '7B. Altbier',
        properties: {
          overallImpression:
            'A moderately colored, well-attenuated, bitter beer with a rich maltiness balancing a strong bitterness. Light and spicy hop character complements the malt. A dry beer with a firm body and smooth palate.',
          aroma:
            'Malty and rich with grainy characteristics like baked bread or nutty, toasted bread crusts. Should not have darker roasted or chocolate notes. Malt intensity is moderate to moderately-high. Moderate to low hops complement but do not dominate the malt, and often have a spicy, peppery, or floral character. Fermentation character is very clean. Low to medium-low esters optional.',
          appearance:
            'The color ranges from amber to deep copper, stopping short of brown; bronze-orange is most common. Brilliant clarity. Thick, creamy, long-lasting off-white head.',
          flavor:
            'Malt profile similar to the aroma, with an assertive, medium to high hop bitterness balancing the rich malty flavors. The beer finishes medium-dry to dry with a grainy, bitter, malty-rich aftertaste. The finish is long-lasting, sometimes with a nutty or bittersweet impression. The apparent bitterness level is sometimes masked by the malt character if the beer is not very dry, but the bitterness tends to scale with the malt richness to maintain balance. No roast. No harshness. Clean fermentation profile. Light fruity esters, especially dark fruit, may be present. Medium to low spicy, peppery, or floral hop flavor. Light minerally character optional.',
          mouthfeel: 'Medium body. Smooth. Medium to medium-high carbonation. Astringency low to none.',
          comments:
            'Classic, traditional examples in the Altstadt ("old town") section of Düsseldorf are served from casks. Most examples have a balanced (25-35 IBU) bitterness, not the aggressive hop character of the well-known Zum Uerige. Stronger sticke and doppelsticke beers should be entered in the 27 Historical Beer style instead.',
          history:
            'Developed in the late 19th century in Düsseldorf to use lager techniques to compete with lager. Older German styles were brewed in the area but there is no linkage to modern Altbier.',
          characteristicIngredients:
            'Grists vary, but usually consist of German base malts (usually Pils, sometimes Munich) with small amounts of crystal, chocolate, or black malts. May include some wheat, including roasted wheat. Spalt hops are traditional, but other traditional German or Czech hops can be used. Clean, highly attenuative ale yeast. A step mash program is traditional. Fermented at cool ale temperatures, then cold conditioned.',
          styleComparison:
            'More bitter and malty than International Amber Lagers. Somewhat similar to California Common, both in production technique and finished flavor and color, though not in ingredients. Less alcohol, less malty richness, and more bitterness than a Dunkles Bock. Drier, richer, and more bitter than a Vienna Lager.',
          vitalStatistics: {
            OG: [1.044, 1.052],
            IBUs: [25, 50],
            FG: [1.008, 1.014],
            SRM: [9, 17],
            ABV: [4.3, 5.5],
          },
          commercialExamples:
            'Bolten Alt, Diebels Alt, Füchschen Alt, Original Schlüssel Alt, Schlösser Alt, Schumacher Alt, Uerige Altbier',
          tags: 'standard-strength, amber-color, top-fermented, lagered, central-europe, traditional-style, amber-ale-family, bitter',
        },
        description:
          'A cold-conditioned, top-fermenting beer from Düsseldorf that has a cleaner and smoother palate than is typical for most ales. "Alt" refers to the "old" style of brewing (using top-fermenting yeast) that was common before bottom-fermenting lager brewing became popular.\n',
      },
    ],
  },
  {
    title: '8. Dark European Lager',
    description: 'This category contains German vollbier lagers darker than amber-brown color.',
    styles: [
      {
        title: '8A. Munich Dunkel',
        properties: {
          overallImpression:
            'A traditional malty brown lager from Bavaria. Deeply toasted, bready malt flavors without any roasty or burnt flavors. Smooth and rich, with a restrained bitterness and a relatively dry finish that allows for drinking in quantity.',
          aroma:
            'Moderate to high malt richness, like toasted bread crusts with hints of chocolate, nuts, caramel, or toffee. Fresh traditional versions often show higher levels of chocolate. The malt character is more malty-rich than sugary or caramelly sweet. Clean fermentation profile. A light spicy, floral, or herbal hop aroma is optional.',
          appearance:
            'Deep copper to dark brown, often with a red or garnet tint. Creamy, light to medium tan head. Usually clear.',
          flavor:
            "Rich malt flavors similar to aroma (same malt descriptors apply), medium to high. Restrained bitterness, medium-low to medium, giving an overall malty balance. Malty and soft on the palate without being overly sweet, and medium-dry in the finish with a malty aftertaste. No roast, burnt, or bitter malt flavors, toasted flavors shouldn't have a harsh grainy dryness, and caramel flavors should not be sweet. Low spicy, herbal, or floral hop flavor optional. Clean fermentation profile.",
          mouthfeel:
            'Medium to medium-full body, providing a soft and dextrinous mouthfeel without being heavy or cloying. Moderate carbonation. Smooth lager character. No harsh or biting astringency. Not warming.',
          comments:
            'A traditional Munich style, the dark companion to Helles. Franconian versions are more bitter than ones from Munich.',
          history:
            'Developed at Spaten in the 1830s after the development of Munich malt, and seen as a successor to dark regional beers of the time. While originating in Munich, the style became popular throughout Bavaria (especially Franconia).',
          characteristicIngredients:
            'Traditionally, Munich malts, but Pils and Vienna can be used too. Light use of specialty malts for color and depth. Decoction mash traditional. German hops and lager yeast.',
          styleComparison:
            'Not as intense in maltiness or as strong as a Dunkles Bock. Lacking the more roasted flavors and often the hop bitterness of a Schwarzbier. Richer, more malt-centric, and less hoppy than a Czech Dark Lager.',
          vitalStatistics: {
            OG: [1.048, 1.056],
            IBUs: [18, 28],
            FG: [1.01, 1.016],
            SRM: [17, 28],
            ABV: [4.5, 5.6],
          },
          commercialExamples:
            'Ayinger Altbairisch Dunkel, Ettaler Kloster-Dunkel, Eittinger Urtyp Dunkel, Hacker-Pschorr Münchner Dunkel, Hofbräuhaus Dunkel, Weltenburger Kloster Barock-Dunkel',
          tags: 'standard-strength, dark-color, bottom-fermented, lagered, central-europe, traditional-style, malty, dark-lager-family',
        },
      },
      {
        title: '8B. Schwarzbier',
        properties: {
          overallImpression:
            'A dark German lager that balances roasted yet smooth malt flavors with moderate hop bitterness. The lighter body, dryness, and lack of a harsh, burnt, or heavy aftertaste helps make this beer quite drinkable.',
          aroma:
            'Low to moderate malt, with low aromatic malty sweetness and hints of roast malt often apparent. The malt can be clean and neutral or moderately rich and bready, and may have a hint of dark caramel. The roast character can be somewhat dark chocolate- or coffee-like but should never be burnt. A moderately low spicy, floral, or herbal hop aroma is optional. Clean lager yeast character.',
          appearance:
            'Medium to very dark brown in color, often with deep ruby to garnet highlights, yet almost never truly black. Very clear. Large, persistent, tan-colored head.',
          flavor:
            'Light to moderate malt flavor, which can have a clean, neutral character to a moderately rich, bread-malty quality. Light to moderate roasted malt flavors can give a bitter-chocolate palate that is never burnt. Medium-low to medium bitterness. Light to moderate spicy, floral, or herbal hop flavor. Clean lager character. Dry finish. Some residual sweetness is acceptable but not traditional. Aftertaste of hop bitterness with a complementary but subtle roastiness in the background.',
          mouthfeel:
            'Medium-light to medium body. Moderate to moderately-high carbonation. Smooth. No harshness or astringency, despite the use of dark, roasted malts.',
          comments:
            'Literally means black beer in German. While sometimes called a "black Pils," the beer is rarely as dark as black or as hop-forward and bitter as a Pils. Strongly roasted, Porter-like flavors are a flaw.',
          history:
            'A regional specialty from Thuringia, Saxony, and Franconia in Germany. Served as the inspiration for black lagers brewed in Japan. Popularity grew after German reunification in 1990.',
          characteristicIngredients:
            'German Munich malt and Pilsner malts for the base, with huskless dark roasted malts that add roast flavors without burnt flavors. German hop varieties and clean German lager yeasts are traditional.',
          styleComparison:
            'In comparison with a Munich Dunkel, usually darker in color, drier on the palate, lighter in body, and with a noticeable (but not high) roasted malt edge to balance the malt base. Should not taste like an American Porter made with lager yeast. Drier, less malty, with less hop character than a Czech Dark Lager.',
          vitalStatistics: {
            OG: [1.046, 1.052],
            IBUs: [20, 35],
            FG: [1.01, 1.016],
            SRM: [19, 30],
            ABV: [4.4, 5.4],
          },
          commercialExamples:
            'Chuckanut Schwarz Lager, Devils Backbone Schwartz Bier, Köstritzer Schwarzbier, Kulmbacher Mönchshof Schwarzbier, Neuzeller Original Badebier, pFriem Schwarzbier',
          tags: 'standard-strength, dark-color, bottom-fermented, lagered, central-europe, traditional-style, balanced, dark-lager-family',
        },
      },
    ],
  },
  {
    title: '9. Strong European Beer',
    description:
      'This category contains more strongly flavored and higher alcohol lagers from Germany and the Baltic region. Most are dark, but some pale versions are known.',
    styles: [
      {
        title: '9A. Doppelbock',
        properties: {
          overallImpression:
            'A strong, rich, and very malty German lager that can have both pale and dark variants. The darker versions have more richly-developed, deeper malt flavors, while the paler versions have slightly more hops and dryness.',
          aroma:
            'Very strong maltiness, possibly with light caramel notes, and up to a moderate alcohol aroma. Virtually no hop aroma.\nDark versions have significant, rich Maillard products, deeply toasted malt, and possibly a slight chocolate-like aroma that should never be roasted or burnt. Moderately-low dark fruit, like plums, dark grapes, or fruit leather, is allowable.\nPale versions have a rich and strong, often toasty, malt presence, possibly with a light floral, spicy, or herbal hop accent.',
          appearance:
            'Good clarity, with a large, creamy, persistent head.\nDark versions are copper to dark brown in color, often with ruby highlights, and an off-white head.\nPale versions are deep gold to light amber in color, with a white head.',
          flavor:
            'Very rich and malty. Hop bitterness varies from moderate to moderately low but always allows malt to dominate the flavor. Faint hop flavor optional. Most examples are fairly malty-sweet on the palate, but should have an impression of attenuation in the finish. The impression of sweetness comes from low hopping, not from incomplete fermentation. Clean fermentation profile.\nDark versions have malt and ester flavors similar to the aroma (same descriptors and intensities).\nPale versions have a strong bready and toasty malt flavor, a light floral, spicy, or herbal hop flavor, and a drier finish.',
          mouthfeel:
            'Medium-full to full body. Moderate to moderately-low carbonation. Very smooth without harshness, astringency. A light alcohol warmth may be noted, but it should never burn.',
          comments:
            'Doppelbock means double bock. Most versions are dark colored and may display the caramelizing and Maillard products of decoction mashing, but excellent pale versions also exist. The pale versions will not have the same richness and darker malt and fruit flavors of the dark versions, and may be a bit drier, hoppier, and more bitter. While most traditional examples are in the lower end of the ranges cited, the style can be considered to have no upper limit for gravity and alcohol, provided the balance remains the same.',
          history:
            'A Bavarian specialty originating in Munich, first made by the monks of St. Francis of Paula by the 1700s. Historical versions were less well-attenuated than modern interpretations, thus with higher sweetness and lower alcohol levels. Was called "liquid bread" by monks, and consumed during the Lenten fast. Breweries adopted beer names ending in "-ator" after a 19th century court ruling that no one but Paulaner was allowed to use the name Salvator. Traditionally dark brown in color; paler examples are a more recent development.',
          characteristicIngredients:
            'Pils, Vienna, Munich malts. Occasionally dark malt for color adjustment. Traditional German hops. Clean German lager yeast. Decoction mashing is traditional.',
          styleComparison:
            'A stronger, richer, more full-bodied version of either a Dunkles Bock or a Helles Bock. Pale versions will show higher attenuation and less dark fruity character than the darker versions.',
          entryInstructions: 'The entrant will specify whether the entry is a pale or a dark variant.',
          vitalStatistics: {
            OG: [1.072, 1.112],
            IBUs: [16, 26],
            FG: [1.016, 1.024],
            SRM: [6, 25],
            ABV: [7, 10],
          },
          commercialExamples:
            'Dark Versions - Andechs Doppelbock Dunkel, Ayinger Celebrator, Paulaner Salvator, Spaten Optimator, Tröegs Troegenator, Weihenstephaner Korbinian; Pale Versions - Eggenberg Urbock 23º, Meinel Doppelbock Hell, Plank Bavarian Heller Doppelbock, Riegele Auris 19, Schönbuch Doppelbock Hell, Staffelberg-Bräu Zwergator',
          tags: 'high-strength, amber-color, pale-color, bottom-fermented, lagered, central-europe, traditional-style, bock-family, malty',
        },
      },
      {
        title: '9B. Eisbock',
        properties: {
          overallImpression:
            'A strong, full-bodied, rich, and malty dark German lager often with a viscous quality and strong flavors. Even though flavors are concentrated, the alcohol should be smooth and warming, not burning.',
          aroma:
            'Dominated by rich, intense malt and a definite alcohol presence. The malt can have bready, toasty, qualities, with some caramel or faint chocolate, often with dark fruit notes like plums or grapes. No hop aroma. Alcohol aromas should not be harsh or solventy. Clean fermentation profile.',
          appearance:
            'Deep copper to dark brown in color, often with attractive ruby highlights. Good clarity. Head retention may be moderate to poor. Off-white to deep ivory colored head. Pronounced legs are often evident.',
          flavor:
            'Rich, sweet malt balanced by a significant alcohol presence. The malt can have Maillard products, toasty qualities, some caramel, and occasionally a slight chocolate flavor. May have significant malt-derived dark fruit esters. Hop bitterness just offsets the malt sweetness enough to avoid a cloying character. No hop flavor. Alcohol helps balance the strong malt presence. The finish should be of rich malt with a certain dryness from the alcohol. It should not be sticky, syrupy, or cloyingly sweet. Clean fermentation profile.',
          mouthfeel:
            'Full to very full-bodied. Low carbonation. Significant alcohol warmth without sharp hotness. Very smooth and silky without harsh edges from alcohol, bitterness, fusels, or other concentrated flavors.',
          comments:
            'Extended lagering is often needed post-freezing to smooth the alcohol and enhance the malt and alcohol balance. Pronounced "ICE-bock."',
          history:
            'Originating in Kulmbach in Franconia in the late 1800s, although exact origins are not known. Fables describe it as coming from beer accidentally freezing at a brewery.',
          characteristicIngredients:
            'Same as Doppelbock. Produced by freezing a doppelbock-like beer and removing ice ("freeze distillation"), thus concentrating flavor and alcohol, as well as any defects present. Commercial eisbocks are generally concentrated anywhere from 7% to 33% by volume.',
          styleComparison:
            'Eisbocks are not simply stronger Doppelbocks; the name refers to the process of freezing and concentrating the beer, and is not a statement on alcohol; some Doppelbocks are stronger than Eisbocks. Not as thick, rich, or sweet as a Wheatwine.',
          vitalStatistics: {
            OG: [1.078, 1.12],
            IBUs: [25, 35],
            FG: [1.02, 1.035],
            SRM: [17, 30],
            ABV: [9, 14],
          },
          commercialExamples: 'Kulmbacher Eisbock',
          tags: 'very-high-strength, amber-color, bottom-fermented, lagered, central-europe, traditional-style, bock-family, malty',
        },
      },
      {
        title: '9C. Baltic Porter',
        properties: {
          overallImpression:
            'A strong, dark, malty beer with different interpretations within the Baltic region. Smooth, warming, and richly malty, with complex dark fruit flavors and a roasted flavor without burnt notes.',
          aroma:
            'Rich maltiness often containing caramel, toffee, nuts, deep toast, or licorice notes. Complex alcohol and ester profile of moderate strength, and reminiscent of plums, prunes, raisins, cherries, or currants, occasionally with a vinous Port-like quality. Deep malt accents of dark chocolate, coffee, or molasses, but never burnt. No hops. No sourness. Smooth, not sharp, impression.',
          appearance:
            'Dark reddish-copper to opaque dark brown color, but not black. Thick, persistent tan-colored head. Clear, although darker versions can be opaque.',
          flavor:
            'As with aroma, has a rich maltiness with a complex blend of deep malt, dried fruit esters, and alcohol. The malt can have a caramel, toffee, nutty, molasses, or licorice complexity. Prominent yet smooth Schwarzbier-like roasted flavor that stops short of burnt. Light hints of black currants and dark dried fruits. Smooth palate and full finish. Starts malty-sweet but darker malt flavors quickly dominate and persist through the dryish finish, leaving a hint of roast coffee or licorice and dried fruit in the aftertaste. Medium-low to medium bitterness, just to provide balance and prevent it from seeming cloying. Hop flavor from slightly spicy hops ranges from none to medium-low. Clean fermentation profile.',
          mouthfeel:
            'Generally quite full-bodied and smooth, with a well-aged alcohol warmth that can be deceptive. Medium to medium-high carbonation, making it seem even more mouth-filling. Not heavy on the tongue due to carbonation level.',
          comments:
            'Most commercial versions are in the 7-8.5% ABV range. The best examples have a deceptive strength that makes them dangerously easy to drink. The character of these beers varies by country of origin, so be careful about generalizing based on a single example. Some beers are truer to their English roots, while others are more of the style first popularized in Poland.',
          history:
            'Developed indigenously (and independently) in several countries bordering the Baltic Sea after import of popular English porters and stouts was interrupted in the early 1800s. Historically top-fermented, many breweries adapted the recipes for bottom-fermenting yeast along with the rest of their production. The name Baltic Porter is recent (since the 1990s) and describes the modern collection of beers with a somewhat similar profile from these countries, not historical versions.',
          characteristicIngredients:
            'Generally lager yeast (cold fermented if using ale yeast, as is required when brewed in Russia). Debittered dark malt. Munich or Vienna base malt. Continental hops. May contain crystal malts or adjuncts. Brown or amber malt common in historical recipes. As a collection of regional beers, different formulations are expected.',
          styleComparison:
            'Combines the body, maltiness, richness, and smoothness of a Doppelbock, the darker malt character of an English Porter, the roast flavors of a Schwarzbier, and alcohol and fruitiness of and Old Ale. Much less roasted and often lower in alcohol than an Imperial Stout.',
          vitalStatistics: {
            OG: [1.06, 1.09],
            IBUs: [20, 40],
            FG: [1.016, 1.024],
            SRM: [17, 30],
            ABV: [6.5, 9.5],
          },
          commercialExamples:
            'Aldaris Mežpils Porteris, Baltika 6 Porter, Devils Backbone Danzig, Okocim Mistrzowski Porter, Sinebrychoff Porter, Zywiec Porter',
          tags: 'high-strength, dark-color, any-fermentation, lagered, eastern-europe, traditional-style, porter-family, malty',
        },
      },
    ],
  },
  {
    title: '10. German Wheat Beer',
    description:
      'This category contains vollbier- and starkbier-strength German wheat beers without sourness, in light and dark colors.',
    styles: [
      {
        title: '10A. Weissbier',
        properties: {
          overallImpression:
            'A pale, refreshing, lightly-hopped German wheat beer with high carbonation, dry finish, fluffy mouthfeel, and a distinctive banana-and-clove weizen yeast fermentation profile.',
          aroma:
            'Moderate to strong esters and phenols, typically banana and clove, often well balanced and typically stronger than the malt. Light to moderate bready, doughy, or grainy wheat aroma. Light vanilla optional. Light floral, spicy, or herbal hops optional. Bubblegum (strawberry with banana), sourness, or smoke are faults.',
          appearance:
            'Pale straw to gold in color. Very thick, moussy, long-lasting white head. Can be hazy and have a shine from wheat and yeast, although this can settle out in bottles.',
          flavor:
            'Low to moderately strong banana and clove flavor, often well balanced. Low to moderate soft, somewhat bready, doughy, or grainy wheat flavor supported by the slight Pils malt grainy sweetness. Very low to moderately low bitterness. Well-rounded, flavorful palate with a relatively dry finish. Light vanilla optional. Very low floral, spicy, or herbal hop flavor optional. Any impression of sweetness is due more to low bitterness than any residual sweetness; a sweet or heavy finish impairs drinkability. Bubblegum, sourness, or smoke are faults. While the banana-and-clove profile is important, it should not be so strong as to be extreme and unbalanced.',
          mouthfeel:
            'Medium-light to medium body; never heavy. Fluffy, creamy fullness progressing to a light, spritzy finish aided by high to very high carbonation. Effervescent.',
          comments:
            "Also known as hefeweizen or weizenbier, particularly outside Bavaria. These beers are best enjoyed while young and fresh, as they often don't age well. In Germany, lower-alcohol light (leicht) and non-alcoholic versions are popular. Kristall versions are filtered for brilliant clarity.",
          history:
            'While Bavaria has a wheat beer tradition dating back before the 1500s, brewing wheat beer used to be a monopoly reserved for Bavarian royalty. Modern Weissbier dates from 1872 when Schneider began production of its amber version. However, pale Weissbier only became popular since the 1960s (although the name historically could be used in Germany to describe beer made from air-dried malt, a different tradition). It is quite popular today, particularly in southern Germany.',
          characteristicIngredients:
            'Malted wheat, at least half the grist. Pilsner malt. Decoction mash traditional. Weizen yeast, cool fermentation temperatures.',
          styleComparison:
            'Compared to American Wheat, has a banana and clove yeast character and less bitterness. Compared to a Dunkles Weissbier, has a paler color and less malt richness and flavor.',
          entryInstructions: 'The entrant may specify whether the yeast should be roused before serving.',
          vitalStatistics: {
            OG: [1.044, 1.053],
            IBUs: [8, 15],
            FG: [1.008, 1.014],
            SRM: [2, 6],
            ABV: [4.3, 5.6],
          },
          commercialExamples:
            'Ayinger Bräuweisse, Distelhäuser Hell Weizen, Hacker-Pschorr Hefeweißbier, Hofbräuhaus Münchner Weisse, Schneider Weisse Original Weissbier, Weihenstephaner Hefeweißbier',
          tags: 'standard-strength, pale-color, top-fermented, central-europe, traditional-style, wheat-beer-family, malty',
        },
      },
      {
        title: '10B. Dunkles Weissbier',
        properties: {
          overallImpression:
            'A moderately dark German wheat beer with a distinctive banana-and-clove weizen yeast fermentation profile, supported by a toasted bread or caramel malt flavor. Highly carbonated and refreshing, with a creamy, fluffy texture and light finish.',
          aroma:
            'Moderate esters and phenols, typically banana and clove, often well balanced with each other and with the malt. Light to moderate bready, doughy, or grainy wheat aroma, often accompanied by caramel, bread crust, or richer malt notes. Low to moderate vanilla optional. Light floral, spicy, or herbal hops optional. Bubblegum (strawberry with banana), sourness, or smoke are faults.',
          appearance:
            'Light copper to dark, mahogany brown in color. Very thick, moussy, long-lasting off-white head. Can be hazy and have a shine from wheat and yeast, although this can settle out in bottled versions.',
          flavor:
            'Low to moderately strong banana and clove flavor, often well balanced with each other and with the malt, although the malt may sometimes mask the clove impression. Low to medium-high soft, somewhat bready, doughy, or grainy wheat flavor with richer caramel, toast, or bread crust flavors. No strongly roasted flavors, but a touch of roasty dryness is allowable. Very low to low bitterness. Well-rounded, flavorful, often somewhat malty palate with a relatively dry finish. Very light to moderate vanilla optional. Low spicy, herbal, or floral hop flavor optional. Bubblegum, sourness, or smoke are faults.',
          mouthfeel:
            'Medium-light to medium-full body. Fluffy, creamy fullness progressing to a lighter finish, aided by moderate to high carbonation. Effervescent.',
          comments:
            'Often known as dunkelweizen, particularly in the United States. Increasingly rare and often being replaced by Kristall and non-alcoholic versions in Germany.',
          history:
            "Bavaria has a wheat beer brewing traditional hundreds of years old, but the brewing right was reserved for Bavarian royalty until the late 1700s. Old-fashioned Bavarian wheat beer was often dark, as were most beers of the time. Pale Weissbier started to become popular in the 1960s, but traditional dark wheat beer remained somewhat of an old person's drink.",
          characteristicIngredients:
            'Malted wheat, at least half the grist. Munich, Vienna, or Pilsner malt. Dark wheat, caramel wheat, or color malt. Decoction mash traditional. Weizen yeast, cool fermentation temperatures.',
          styleComparison:
            'Combines the yeast and wheat character of Weissbier with the malty richness of a Munich Dunkel. The banana-and-clove character is often less apparent than in a Weissbier due to the increased maltiness. Has a similar yeast character as Roggenbier, but without the rye flavor and increased body.',
          vitalStatistics: {
            OG: [1.044, 1.057],
            IBUs: [10, 18],
            FG: [1.008, 1.014],
            SRM: [14, 23],
            ABV: [4.3, 5.6],
          },
          commercialExamples:
            'Ayinger Urweisse, Ettaler Benediktiner Weißbier Dunkel, Franziskaner Hefe-Weisse Dunkel, Hirsch Dunkel Weisse, Tucher Dunkles Hefe Weizen, Weihenstephaner Hefeweißbier Dunkel',
          tags: 'standard-strength, amber-color, top-fermented, central-europe, traditional-style, wheat-beer-family, malty',
        },
      },
      {
        title: '10C. Weizenbock',
        properties: {
          overallImpression:
            'A strong and malty German wheat beer combining the best wheat and yeast flavors of a Weissbier with the rich maltiness, strength, and body of a Bock. The style range includes Bock and Doppelbock strength, with variations for pale and dark color.',
          aroma:
            'Medium-high to high malty richness with a significant bready, grainy wheat character. Medium-low to medium-high weizen yeast character, typically banana and clove. Vanilla accents optional. No hops. Low to moderate alcohol, not hot or solventy. The malt, yeast, and alcohol are well balanced, complex, and inviting. Bubblegum (strawberry with banana), sourness, or smoke are faults.\nDark versions have a deeper, highly toasted, bready malt richness with significant Maillard products, similar to a Dunkles Bock or dark Doppelbock. They can also have caramel and dark fruit esters, like plums, prunes, dark grapes, fruit leather, and raisins, particularly as they age.\nPale versions have a grainy-sweet, bready, toasty malty richness, similar to a Helles Bock or pale Doppelbock.',
          appearance:
            'Very thick, moussy, long-lasting head. Can be hazy and have a shine from wheat and yeast, although this can settle out with age.\nDark versions are dark amber to dark ruby-brown in color, with a light tan head.\nPale versions are gold to amber in color, with a very white to off-white head.',
          flavor:
            'Medium-high to high malty richness with significant bready, grainy wheat flavor. Low to moderate banana and spice (clove, vanilla) yeast character. No hop flavor. Low to medium-low bitterness can give a slightly sweet palate impression, but the beer typically finishes dry. Light alcohol can enhance this character. The interplay between the malt, yeast, and alcohol adds complexity and interest, which is often enhanced with age. Bubblegum, sourness, or smoke are faults.\nDark versions have deeper, richly bready or toasty malt flavors with significant Maillard products, optionally with caramel or light chocolate but not roast. Can have some dark fruit esters like plums, prunes, dark grapes, fruit leather, or raisins, particularly as they age.\nPale versions have a bready, toasty, grainy-sweet malt richness.',
          mouthfeel:
            'Medium-full to full body. Soft, smooth, fluffy or creamy texture. Mild alcohol warmth. Moderate to high carbonation.',
          comments:
            'A Weissbier brewed to bock or doppelbock strength, although Schneider also produces an Eisbock version. Pale and dark versions exist, but dark is most common. Lightly oxidized Maillard products can produce some rich, intense flavors and aromas that are often seen in aged imported commercial products; fresher versions will not have this character. Well-aged examples might also take on a slight sherry-like complexity. Pale versions, like their doppelbock cousins, have less rich malt complexity and often more hop-forward. However, versions that have significant late hops or are dry-hopped should be entered in 34B Mixed-Style Beer.',
          history:
            'Dopplebock-strength Aventinus was created in 1907 at the Schneider Weisse Brauhaus in Munich. Pale versions are a much more recent invention.',
          characteristicIngredients:
            'Malted wheat, at least half the grist. Munich, Vienna, or Pilsner malt. Color malts may be used sparingly. Decoction mash traditional. Weizen yeast, cool fermentation temperatures.',
          styleComparison:
            'Stronger and richer than a Weissbier or Dunkles Weissbier, but with similar yeast character. More directly comparable to the Doppelbock style, with the pale and dark variations. Can vary widely in strength, but most are in the Bock to Doppelbock range.',
          entryInstructions:
            'The entrant will specify whether the entry is a pale (SRM 6-9) or a dark (SRM 10-25) version.',
          vitalStatistics: {
            OG: [1.064, 1.09],
            IBUs: [15, 30],
            FG: [1.015, 1.022],
            SRM: [6, 25],
            ABV: [6.5, 9],
          },
          commercialExamples:
            'Dark - Plank Bavarian Dunkler Weizenbock, Penn Weizenbock, Schalchner Weisser Bock, Schneider Weisse Aventinus; Pale -Ayinger Weizenbock, Distelhäuser Weizen Bock, Ladenburger Weizenbock Hell, Weihenstephaner Vitus',
          tags: 'high-strength, amber-color, pale-color, top-fermented, central-europe, traditional-style, wheat-beer-family, malty',
        },
      },
    ],
  },
  {
    title: '11. British Bitter',
    description:
      'The family of British bitters grew out of English pale ales as a draught product after the late 1800s. The use of crystal malts in bitters became more widespread after WWI. Traditionally served very fresh under no pressure (gravity or hand pump only) at cellar temperatures (i.e., "real ale"). Most bottled or kegged versions of UK-produced bitters are often higher-alcohol and more highly carbonated versions of cask products produced for export, and have a different character and balance than their draught counterparts in Britain (often being sweeter and less hoppy than the cask versions). These guidelines reflect the "real ale" version of the style, not the export formulations of commercial products.\nSeveral regional variations of bitter exist, ranging from darker, sweeter versions served with nearly no head to brighter, hoppier, paler versions with large foam stands, and everything in between.\nJudges should not over-emphasize the caramel component of these styles. Exported bitters can be oxidized, which increases caramel-like flavors (as well as more negative flavors). Do not assume that oxidation-derived flavors are traditional or required for the style.',
    styles: [
      {
        title: '11A. Ordinary Bitter',
        properties: {
          overallImpression:
            'Low gravity, alcohol, and carbonation make this an easy-drinking session beer. The malt profile can vary in flavor and intensity, but should never override the overall bitter impression. Drinkability is a critical component of the style.',
          aroma:
            'Low to moderate malt aroma, often (but not always) with a light caramel quality. Bready, biscuity, or lightly toasty malt complexity is common. Mild to moderate fruitiness. Hop aroma can range from moderate to none, typically with a floral, earthy, resiny, or fruity character. Generally no diacetyl, although very low levels are allowed.',
          appearance:
            'Pale amber to light copper color. Good to brilliant clarity. Low to moderate white to off-white head. May have very little head due to low carbonation.',
          flavor:
            'Medium to moderately high bitterness. Moderately low to moderately high fruity esters. Moderate to low hop flavor, typically with an earthy, resiny, fruity, or floral character. Low to medium maltiness with a dry finish. The malt profile is typically bready, biscuity, or lightly toasty. Low to moderate caramel or toffee flavors are optional. Balance is often decidedly bitter, although the bitterness should not completely overpower the malt flavor, esters, and hop flavor. Generally no diacetyl, although very low levels are allowed.',
          mouthfeel:
            'Light to medium-light body. Low carbonation, although bottled examples can have moderate carbonation.',
          comments:
            'The lowest gravity member of the British Bitter family, typically known to consumers simply as "bitter" (although brewers tend to refer to it as Ordinary Bitter to distinguish it from other members of the family).',
          history: 'See comments in category introduction.',
          characteristicIngredients:
            'Pale ale, amber, or crystal malts. May use a touch of dark malt for color adjustment. May use sugar adjuncts, corn, or wheat. English finishing hops are most traditional, but any hops are fair game; if American hops are used, a light touch is required. Characterful British yeast.',
          styleComparison:
            'Some modern variants are brewed exclusively with pale malt and are known as golden ales, summer ales, or golden bitters. Emphasis is on the bittering hop addition as opposed to the aggressive middle and late hopping seen in American ales.',
          vitalStatistics: {
            OG: [1.03, 1.039],
            IBUs: [25, 35],
            FG: [1.007, 1.011],
            SRM: [8, 14],
            ABV: [3.2, 3.8],
          },
          commercialExamples:
            "Bateman's XB, Brains Bitter, Brakspear Gravity, Fuller's Chiswick Bitter, Greene King IPA, Tetley's Original Bitter",
          tags: 'session-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, bitter',
        },
      },
      {
        title: '11B. Best Bitter',
        properties: {
          overallImpression:
            'A flavorful, yet refreshing, session beer. Some examples can be more malt balanced, but this should not override the overall bitter impression. Drinkability is a critical component of the style.',
          aroma:
            'Low to moderate malt aroma, often (but not always) with a low to medium-low caramel quality. Bready, biscuit, or lightly toasty malt complexity is common. Mild to moderate fruitiness. Hop aroma can range from moderate to none, typically with a floral, earthy, resiny, or fruity character. Generally no diacetyl, although very low levels are allowed.',
          appearance:
            'Pale amber to medium copper color. Good to brilliant clarity. Low to moderate white to off-white head. May have very little head due to low carbonation.',
          flavor:
            'Medium to moderately high bitterness. Moderately low to moderately high fruity esters. Moderate to low hop flavor, typically with an earthy, resiny, fruity, or floral character. Low to medium maltiness with a dry finish. The malt profile is typically bready, biscuity, or lightly toasty. Low to moderate caramel or toffee flavors are optional. Balance is often decidedly bitter, although the bitterness should not completely overpower the malt flavor, esters and hop flavor. Generally no diacetyl, although very low levels are allowed.',
          mouthfeel:
            'Medium-light to medium body. Low carbonation, although bottled examples can have moderate carbonation.',
          comments: 'More evident malt flavor than in an ordinary bitter; this is a stronger, session-strength ale.',
          history: 'See comments in category introduction.',
          characteristicIngredients:
            'Pale ale, amber, or crystal malts. Most contain sugar. May use a touch of caramel or dark malt for color adjustment. May use corn or wheat. English finishing hops are most traditional, but any hops are fair game; if American hops are used, a light touch is required. Characterful British yeast.',
          styleComparison:
            'More alcohol than an ordinary bitter, and often using higher-quality ingredients. Less alcohol than a strong bitter. More caramel or base malt character and color than a British Golden Ale. Emphasis is on the bittering hop addition as opposed to the aggressive middle and late hopping seen in American ales.',
          vitalStatistics: {
            OG: [1.04, 1.048],
            IBUs: [25, 40],
            FG: [1.008, 1.012],
            SRM: [8, 16],
            ABV: [3.8, 4.6],
          },
          commercialExamples:
            "Adnams Southwold Bitter, Fuller's London Pride, Harvey's Sussex Best Bitter, Salopian Darwin's Origin, Surrey Hills Shere Drop, Timothy Taylor Landlord",
          tags: 'standard-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, bitter',
        },
      },
      {
        title: '11C. Strong Bitter',
        properties: {
          overallImpression:
            'An average-strength to moderately-strong British bitter ale. The balance may vary between fairly even between malt and hops to somewhat bitter. Drinkability is a critical component of the style. A rather broad style that allows for considerable interpretation by the brewer.',
          aroma:
            'Hop aroma moderately-high to moderately-low, typically with a floral, earthy, resiny, or fruity character. Medium to medium-high malt aroma, optionally with a low to moderate caramel component. Medium-low to medium-high fruity esters. Generally no diacetyl, although very low levels are allowed.',
          appearance:
            'Light amber to deep copper color. Good to brilliant clarity. Low to moderate white to off-white head. A low head is acceptable when carbonation is also low.',
          flavor:
            'Medium to medium-high bitterness with supporting malt flavors evident. The malt profile is typically bready, biscuity, nutty, or lightly toasty, and optionally has a moderately low to moderate caramel or toffee flavor. Hop flavor moderate to moderately high, typically with a floral, earthy, resiny, or fruity character. Hop bitterness and flavor should be noticeable, but should not totally dominate malt flavors. Moderately-low to high fruity esters. Optionally may have low amounts of alcohol. Medium-dry to dry finish. Generally no diacetyl, although very low levels are allowed.',
          mouthfeel:
            'Medium-light to medium-full body. Low to moderate carbonation, although bottled versions will be higher. Stronger versions may have a slight alcohol warmth but this character should not be too high.',
          comments:
            'In England today, "ESB" is a Fullers trademark, and no one thinks of it as a generic class of beer. It is a unique (but very well-known) beer that has a very strong, complex malt profile not found in other examples, often leading judges to overly penalize traditional English strong bitters. In America, ESB has been co-opted to describe a malty, bitter, reddish, standard-strength (for the US) British-type ale, and is a popular craft beer style. This may cause some judges to think of US brewpub ESBs as representative of this style.',
          history:
            'See comments in category introduction. Strong bitters can be seen as a higher-gravity version of best bitters (although not necessarily "more premium" since best bitters are traditionally the brewer\'s finest product). British pale ales are generally considered a premium, export-strength pale, bitter beer that roughly approximates a strong bitter, although reformulated for bottling (including increasing carbonation levels). While modern British pale ale is considered a bottled bitter, historically the styles were different.',
          characteristicIngredients:
            'Pale ale, amber, or crystal malts, may use a touch of black malt for color adjustment. May use sugar adjuncts, corn or wheat. English finishing hops are most traditional, but any hops are fair game; if American hops are used, a light touch is required. Characterful British yeast. Burton versions use medium to high sulfate water, which can increase the perception of dryness and add a minerally or sulfury aroma and flavor.',
          styleComparison:
            'More evident malt and hop flavors than in a special or best bitter, as well as more alcohol. Stronger versions may overlap somewhat with British Strong Ales, although Strong Bitters will tend to be paler and more bitter. More malt flavor (particularly caramel) and esters than an American Pale Ale, with different finishing hop character.',
          vitalStatistics: {
            OG: [1.048, 1.06],
            IBUs: [30, 50],
            FG: [1.01, 1.016],
            SRM: [8, 18],
            ABV: [4.6, 6.2],
          },
          commercialExamples:
            "Bass Ale, Bateman's Triple XB, Robinsons Trooper, Samuel Smith's Organic Pale Ale, Shepherd Neame Bishop's Finger, Summit Extra Pale Ale",
          tags: 'standard-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, bitter',
        },
      },
    ],
  },
  {
    title: '12. Pale Commonwealth Beer',
    description:
      'This category contains pale, moderately-strong, hop-forward, bitter ales from countries within the former British Empire.',
    styles: [
      {
        title: '12A. British Golden Ale',
        properties: {
          overallImpression:
            'A hop-forward, average-strength to moderately-strong pale bitter. Drinkability and a refreshing quality are critical components of the style, as it was initially a summer seasonal beer.',
          aroma:
            'Hop aroma is moderately low to moderately high, and can use any variety of hops - floral, herbal, or earthy English hops and citrusy American hops are most common. Frequently a single hop varietal will be showcased. Low bready malt aroma with no caramel. Medium-low to low fruity aroma from the hops rather than esters. Low diacetyl optional.',
          appearance:
            'Straw to golden in color. Good to brilliant clarity. Low to moderate white head. A low head is acceptable when carbonation is also low.',
          flavor:
            'Medium to medium-high bitterness. Hop flavor is moderate to moderately high of any hop variety, although citrus flavors are increasingly common. Medium-low to low malt character, generally bready with perhaps a little biscuity flavor. Caramel flavors are typically absent. Hop bitterness and flavor should be pronounced. Moderately-low to low esters. Medium-dry to dry finish. Bitterness increases with alcohol level, but is always balanced. Low diacetyl optional.',
          mouthfeel:
            'Light to medium body. Low to moderate carbonation on draught, although bottled commercial versions will be higher. Stronger versions may have a slight alcohol warmth, but this character should not be too high.',
          comments:
            'Well-hopped, quenching beer with an emphasis on showcasing hops. Served colder than traditional bitters, this style was originally positioned as a refreshing summer beer, but is now often brewed year-round. Once brewed with English hops, increasingly American citrus-flavored hops are used. Golden Ales are also called Golden Bitters, Summer Ales, or British Blonde Ales. Can be found in cask, keg, and bottle.',
          history:
            "Modern golden ales were developed in England to take on strongly-marketed lagers. While it is difficult to identify the first, Hop Back's Summer Lightning, first brewed in 1986, is thought by many to have got the style off the ground.",
          characteristicIngredients:
            'Low-color pale or lager malt acting as a blank canvas for the hop character. May use sugar adjuncts, corn, or wheat. English hops frequently used, although citrusy American varietals are becoming more common. Somewhat clean-fermenting British yeast.',
          styleComparison:
            'More similar to an American Pale Ale than anything else, although it is often lower in alcohol and usually features British ingredients. Has no caramel and fewer esters compared to British Bitters and pale ales. Dry as Bitters but with less malt character to support the hops, giving a different balance. Often uses (and features) American hops, more so than most other modern British styles. Balance of hoppiness between a Blonde Ale and an American Pale Ale.',
          vitalStatistics: {
            OG: [1.038, 1.053],
            IBUs: [20, 45],
            FG: [1.006, 1.012],
            SRM: [2, 5],
            ABV: [3.8, 5],
          },
          commercialExamples:
            'Adnams Explorer, Crouch Vale Brewers Gold, Golden Hill Exmoor Gold, Hop Back Summer Lightning, Oakham JHB, Spitfire Golden Ale',
          tags: 'standard-strength, pale-color, top-fermented, british-isles, craft-style, pale-ale-family, bitter, hoppy',
        },
      },
      {
        title: '12B. Australian Sparkling Ale',
        properties: {
          overallImpression:
            'A well-balanced, pale, highly-carbonated, and refreshing ale suitable for drinking in a hot climate. Fairly bitter, with a moderate herbal-spicy hop and pome fruit ester profile. Smooth, neutral malt flavors with a fuller body but a crisp, highly-attenuated finish.',
          aroma:
            'Fairly soft, clean aroma with a balanced mix of esters, hops, malt, and yeast - all moderate to low in intensity. The esters are frequently pears and apples, optionally with a very light touch of banana. The hops are earthy, herbaceous, or might show the characteristic iron-like Pride of Ringwood nose. The malt can range from neutral grainy to moderately sweet to lightly bready; no caramel should be evident. Very fresh examples can have a lightly yeasty, sulfury nose.',
          appearance:
            'Deep yellow to light amber in color, often medium gold. Tall, frothy, persistent white head with tiny bubbles. Noticeable effervescence due to high carbonation. Brilliant clarity if decanted, but typically poured with yeast to have a cloudy appearance. Not typically cloudy unless yeast roused during the pour.',
          flavor:
            'Medium to low rounded, grainy to bready malt flavor, initially mild to malty-sweet but a medium to medium-high bitterness rises mid-palate to balance the malt. Caramel flavors typically absent. Highly attenuated, giving a dry, crisp finish with lingering bitterness, although the body gives an impression of fullness. Medium to medium-high hop flavor, somewhat earthy and possibly herbal, resinous, peppery, or iron-like but not floral, lasting into aftertaste. Medium-high to medium-low esters, often pears and apples. Banana is optional, but should never dominate. May be lightly minerally or sulfury, especially if yeast is present. Should not be bland.',
          mouthfeel:
            'High to very high carbonation, giving mouth-filling bubbles and a crisp, spritzy carbonic bite. Medium to medium-full body, tending to the higher side if poured with yeast. Smooth but gassy. Stronger versions may have a light alcohol warmth, but lower alcohol versions will not. Very well-attenuated; should not have any residual sweetness.',
          comments:
            'Coopers has been making their flagship Sparkling Ale since 1862, although the formulation has changed over the years. Presently the beer will have brilliant clarity if decanted, but publicans often pour most of the beer into a glass then swirl the bottle and dump in all the yeast. In some bars, the bottle is rolled along the bar. When served on draught, the brewery instructs publicans to invert the keg to rouse the yeast. A cloudy appearance for the style seems to be a modern consumer preference. Always naturally carbonated, even in the keg. A present-use ale, best enjoyed fresh.',
          history:
            'Brewing records show that the majority of Australian beer brewed in the 19th century was draught XXX (Mild) and porter. Ale in bottle was originally developed to compete with imported bottled pale ales from British breweries, such as Bass and Wm Younger\' Monk. By the early 20th century, bottled pale ale went out of fashion and "lighter" lager beers were in vogue. Many Australian Sparkling and Pale Ales were labeled as ales, but were actually bottom-fermented lagers with very similar grists to the ales that they replaced. Coopers of Adelaide, South Australia is the only surviving brewer producing the Sparkling Ale style.',
          characteristicIngredients:
            'Lightly kilned Australian 2-row pale malt, lager varieties may be used. Small amounts of crystal malt for color adjustment only. Modern examples use no adjuncts, cane sugar for priming only. Historical examples using 45% 2 row, 30% higher protein malt (6 row) would use around 25% sugar to dilute the nitrogen content. Traditionally used Australian hops, Cluster, and Goldings until replaced from mid-1960s by Pride of Ringwood. Highly attenuative Burton-type yeast (Australian-type strain typical). Variable water profile, typically with low carbonate and moderate sulfate.',
          styleComparison:
            'Superficially similar to English Pale Ales, although much more highly carbonated, with less caramel, less late hops, and showcasing the signature yeast strain and hop variety. More bitter than IBUs might suggest due to high attenuation, low final gravity, and somewhat coarse hops.',
          vitalStatistics: {
            OG: [1.038, 1.05],
            IBUs: [20, 35],
            FG: [1.004, 1.006],
            SRM: [4, 7],
            ABV: [4.5, 6],
          },
          commercialExamples: 'Coopers Sparkling Ale',
          tags: 'standard-strength, pale-color, top-fermented, pacific, traditional-style, pale-ale-family, bitter',
        },
      },
      {
        title: '12C. English IPA',
        properties: {
          overallImpression:
            'A bitter, moderately-strong, very well-attenuated pale British ale with a dry finish and a hoppy aroma and flavor. Classic British ingredients provide the most authentic flavor profile.',
          aroma:
            'A moderate to moderately-high hop aroma, typically floral, spicy-peppery, or citrus-orange in nature. A slight dry-hop aroma is acceptable, but not required. Medium-low to medium bready or biscuity malt, optionally with a moderately-low caramel-like or toasty malt presence. Low to moderate fruitiness is acceptable. Optional light sulfury note.',
          appearance:
            'Color ranges from golden to deep amber, but most are fairly pale. Should be clear, although unfiltered dry-hopped versions may be a bit hazy. Moderate-sized, persistent head stand with off-white color.',
          flavor:
            'Hop flavor is medium to high, with a moderate to assertive hop bitterness. The hop flavor should be similar to the aroma (floral, spicy-peppery, or citrus-orange). Malt flavor should be medium-low to medium, and be somewhat bready, optionally with light to medium-light biscuit, toast, toffee, or caramel aspects. Medium-low to medium fruitiness. Finish is medium-dry to very dry, and the bitterness may linger into the aftertaste but should not be harsh. The balance is toward the hops, but the malt should still be noticeable in support. If high sulfate water is used, a distinctively minerally, dry finish, some sulfur flavor, and a lingering bitterness are usually present. Some clean alcohol flavor can be noted in stronger versions.',
          mouthfeel:
            'Smooth, medium-light to medium body without hop-derived astringency. Medium to medium-high carbonation can give an overall dry sensation despite a supportive malt presence. A low, smooth alcohol warming can be sensed in stronger versions.',
          comments:
            'The attributes of IPA that were important to its arrival in good condition in India were that it was very well-attenuated, and heavily hopped. Simply because this is how IPA was shipped, doesn\'t mean that other beers such as Porter weren\'t also sent to India, that IPA was invented to be sent to India, that IPA was more heavily hopped than other keeping beers, or that the alcohol level was unusual for the time.\nMany modern examples labeled IPA are quite weak in strength. According to CAMRA, "so-called IPAs with strengths of around 3.5% are not true to style." English beer historian Martyn Cornell has commented that beers like this are "not really distinguishable from an ordinary bitter." So we choose to agree with these sources for our guidelines rather than what some modern British breweries are calling an IPA; just be aware of these two main types of IPAs in the British market today.\nThe beers were shipped in well-used oak casks, so the style shouldn\'t have an oak or Brett character.',
          history:
            "Originally a pale stock ale from London that was first shipped to India in the late 1700s. George Hodgson of the Bow Brewery did not create the style, but was the first well known brewer to dominate the market. After a trade dispute, the East India Company had Samuel Allsopp recreate (and reformulate) the beer in 1823 using Burton's sulfate-rich water. The name India Pale Ale wasn't used until around 1830.\nStrength and popularity declined over time, and the style virtually disappeared in the second half of the 20th century. While the stronger Burton-type IPA remained, the name was also applied to hoppy, lower-gravity, often bottled products (a trend that continues in some modern British examples). The style underwent a craft beer rediscovery in the 1980s, and is what is described in these guidelines.\nModern examples are inspired by classic versions, but shouldn't be assumed to have an unbroken lineage with the exact same profile. White Shield is probably the example with the longest lineage, tracing to the strong Burton IPAs of old and first brewed in 1829.",
          characteristicIngredients:
            'Pale ale malt. English hops, particularly as finishing hops. Attenuative British ale yeast. Refined sugar may be used in some versions. Optional sulfate character from Burton-type water.',
          styleComparison:
            'Generally will have more late hops and less fruitiness and caramel than British pale ales and Bitters. Has less hop intensity and a more pronounced malt flavor than typical American IPAs.',
          vitalStatistics: {
            OG: [1.05, 1.07],
            IBUs: [40, 60],
            FG: [1.01, 1.015],
            SRM: [6, 14],
            ABV: [5, 7.5],
          },
          commercialExamples:
            "Berkshire Lost Sailor IPA, Fuller's Bengal Lancer, Marston's Old Empire IPA, Meantime London IPA, Thornbridge Jaipur, Worthington White Shield",
          tags: 'high-strength, pale-color, top-fermented, british-isles, traditional-style, ipa-family, bitter, hoppy',
        },
      },
    ],
  },
  {
    title: '13. Brown British Beer',
    description:
      'While Dark Mild, Brown Ale, and English Porter may have long and storied histories, these guidelines describe the modern versions. They are grouped together for judging purposes only since they often have similar flavors and balance, not because of any implied common ancestry. The similar characteristics are low to moderate strength, dark color, generally malty balance, and British ancestry. These styles have no historic relationship to each other; especially, none of these styles evolved into any of the others, or was ever a component of another. The category name was never used historically to describe this grouping of beers; it is our name for the judging category. "Brown Beer" was a distinct and important historical product, and is not related to this category name.',
    styles: [
      {
        title: '13A. Dark Mild',
        properties: {
          overallImpression:
            'A dark, low-gravity, malt-focused British session ale readily suited to drinking in quantity. Refreshing, yet flavorful for its strength, with a wide range of dark malt or dark sugar expression.',
          aroma:
            'Low to moderate malt aroma, and may have some fruitiness. The malt expression can take on a wide range of character, which can include caramel, toffee, grainy, toasted, nutty, chocolate, or lightly roasted. Low earthy or floral hop aroma optional. Very low diacetyl optional.',
          appearance:
            'Copper to dark brown or mahogany color. Generally clear, although is traditionally unfiltered. Low to moderate off-white to tan head; retention may be poor.',
          flavor:
            'Generally a malty beer, although may have a very wide range of malt- and yeast-based flavors (e.g., malty, sweet, caramel, toffee, toast, nutty, chocolate, coffee, roast, fruit, licorice, plum, raisin) over a bready, biscuity, or toasty base. Can finish sweet to dry. Versions with darker malts may have a dry, roasted finish. Low to moderate bitterness, enough to provide some balance but not enough to overpower the malt in the balance. Moderate fruity esters optional. Low hop flavor optional. Low diacetyl optional.',
          mouthfeel:
            'Light to medium body. Generally low to medium-low carbonation. Roast-based versions may have a light astringency. Sweeter versions may seem to have a rather full mouthfeel for the gravity. Should not be flat, watery, or thin.',
          comments:
            "Most are low-gravity session beers around 3.2%, although some versions may be made in the stronger (4%+) range for export, festivals, seasonal or special occasions. Generally served on cask; session-strength bottled versions don't often travel well. A wide range of interpretations are possible. Pale (medium amber to light brown) versions exist, but these are even more rare than dark milds; these guidelines only describe the modern dark version.",
          history:
            "Historically, 'mild' was simply an unaged beer, and could be used as an adjective to distinguish between aged or more highly hopped keeping beers. Modern milds trace their roots to the weaker X-type ales of the 1800s, which started to get darker in the 1880s, but only after WWI did they become dark brown. In current usage, the term implies a lower-strength beer with less hop bitterness than bitters. The guidelines describe the modern British version. The term 'mild' is currently somewhat out of favor with consumers, and many breweries no longer use it. Increasingly rare. There is no historic connection or relationship between Mild and Porter.",
          styleComparison:
            'Some versions may seem like lower-gravity modern English Porters. Much less sweet than London Brown Ale.',
          characteristicIngredients:
            "Pale British base malts (often fairly dextrinous), crystal malt, dark malts or dark sugar adjuncts, may also include adjuncts such as flaked maize, and may be colored with brewer's caramel. Characterful British ale yeast. Any type of hops, since their character is muted and rarely is noticeable.",
          vitalStatistics: {
            OG: [1.03, 1.038],
            IBUs: [10, 25],
            FG: [1.008, 1.013],
            SRM: [14, 25],
            ABV: [3, 3.8],
          },
          commercialExamples:
            "Brain's Dark, Greene King XX Mild, Hobson's Champion Mild, Mighty Oak Oscar Wilde, Moorhouse Black Cat, Theakston Traditional Mild",
          tags: 'session-strength, dark-color, top-fermented, british-isles, traditional-style, brown-ale-family, malty',
        },
      },
      {
        title: '13B. British Brown Ale',
        properties: {
          overallImpression:
            'A malty, caramelly, brown British ale without the roasted flavors of a Porter. Balanced and flavorful, but usually a little stronger than most average UK beers.',
          aroma:
            'Light, sweet malt aroma with toffee, nutty, or light chocolate notes, and a light to heavy caramel quality. A light but appealing floral or earthy hop aroma may also be noticed. A light fruity aroma may be evident, but should not dominate.',
          appearance: 'Dark amber to dark reddish-brown color. Clear. Low to moderate off-white to light tan head.',
          flavor:
            'Gentle to moderate malt sweetness, with a light to heavy caramel character, and a medium to dry finish. Malt may also have a nutty, toasted, biscuity, toffee, or light chocolate character. Medium to medium-low bitterness. Malt-hop balance ranges from even to malt-focused. Low floral or earthy hop flavor optional. Low to moderate fruity esters optional.',
          mouthfeel: 'Medium-light to medium body. Medium to medium-high carbonation.',
          comments:
            "A wide-ranging category with different interpretations possible, ranging from lighter-colored to hoppy to deeper, darker, and caramel-focused; however, none of the versions have strongly roasted flavors. A stronger Double Brown Ale was more popular in the past, but is very hard to find now. While London Brown Ales are marketed using the name Brown Ale, we list those as a different judging style due to the significant difference in balance (especially sweetness) and alcohol strength; that doesn't mean that they aren't in the same family, though.",
          history:
            'Brown ale has a long history in Great Britain, although different products used that name at various times. Modern brown ale is a 20th century creation; it is not the same as historical products with the same name. A wide range of gravities were brewed, but modern brown ales are generally of the stronger (by current UK standards) interpretation. This style is based on the modern stronger British brown ales, not historical versions or the sweeter London Brown Ale described in the Historical Beer category. Predominantly but not exclusively a bottled product currently.',
          characteristicIngredients:
            'British mild ale or pale ale malt base with caramel malts. May also have small amounts darker malts (e.g., chocolate) to provide color and the nutty character. English hop varieties are most authentic.',
          styleComparison:
            'More malty balance than British Bitters, with more malt flavors from darker grains. Stronger than a Dark Mild. Less roast than an English Porter. Stronger and much less sweet than London Brown Ale.',
          vitalStatistics: {
            OG: [1.04, 1.052],
            IBUs: [20, 30],
            FG: [1.008, 1.013],
            SRM: [12, 22],
            ABV: [4.2, 5.9],
          },
          commercialExamples:
            "AleSmith Nut Brown Ale, Cigar City Maduro Brown Ale, Maxim Double Maxim, Newcastle Brown Ale, Riggwelter Yorkshire Ale, Samuel Smith's Nut Brown Ale",
          tags: 'standard-strength, amber-color, top-fermented, british-isles, traditional-style, brown-ale-family, malty',
        },
      },
      {
        title: '13C. English Porter',
        properties: {
          overallImpression:
            'A moderate-strength dark brown English ale with a restrained roasty, bitter character. May have a range of roasted flavors, generally without burnt qualities, and often has a malty chocolate and caramel profile.',
          aroma:
            'Moderate to moderately low bready, biscuity, and toasty malt aroma with mild roastiness, often like chocolate. Additional malt complexity may be present as caramel, nuts, toffee sweetness. May have up to a moderate level of floral or earthy hops. Moderate fruity esters optional, but desirable. Low diacetyl optional.',
          appearance:
            'Brown to dark brown in color, often with ruby highlights. Good clarity, although may be opaque. Moderate off-white to light tan head with good to fair retention.',
          flavor:
            'Moderate bready, biscuity, and toasty malt flavor with a mild to moderate chocolate roastiness, and often a significant caramel, nutty, or toffee character, possibly with lower levels of darker flavors like coffee or licorice. Should not be burnt or harshly roasted, although small amounts may contribute a bitter chocolate complexity. Up to moderate earthy or floral hop flavor optional. Low to moderate fruity esters. Medium-low to medium bitterness varies the balance from slightly malty to slightly bitter, with a fairly dry to slightly sweet finish. Moderately-low diacetyl optional.',
          mouthfeel:
            'Medium-light to medium body. Moderately-low to moderately-high carbonation. Light to moderate creamy texture.',
          comments:
            'This style description describes the modern version of English Porter, not every possible variation over time in every region where it existed. Historical re-creations should be entered in the 27 Historical Beer category, with an appropriate description describing the profile of the beer. Modern craft examples in the UK are bigger and hoppier.',
          history:
            'Originating in London in the early 1700s, porter evolved as a more heavily hopped and aged (keeping) version of the Brown Beer popular at the time. It evolved many times based on various technological and ingredient developments (such as the invention of black malt in 1817, and large-scale industrial brewing), as well as consumer preferences, wars, and tax policy. It became a highly-popular, widely-exported style in the early 1800s before declining by the 1870s as it changed to a lower gravity, unaged beer. As gravities continued to decline in all UK beers in the first half of the 1900s, styles stopped being made (including porter, gone by the 1950s). The craft beer era led to its re-introduction in 1978.\nThe name is said to have been derived from its popularity with the London working class performing various load-carrying tasks of the day. Parent of various regional interpretations over time, and a predecessor to all stouts (which were originally called "stout porters"). There is no historic connection or relationship between Mild and Porter.',
          characteristicIngredients:
            'Grists vary, but something producing a dark color is always involved. Chocolate or other roasted malts, caramel malt, brewing sugars, and the like are common. London-type porters often use brown malt as a characteristic flavor.',
          styleComparison:
            'Differs from American Porter in that it usually has softer, sweeter, and more caramelly flavors, lower gravities, and usually less alcohol; American Porter also usually has more hop character. More substance and roast than a British Brown Ale. Higher in gravity than a Dark Mild.',
          vitalStatistics: {
            OG: [1.04, 1.052],
            IBUs: [18, 35],
            FG: [1.008, 1.014],
            SRM: [20, 30],
            ABV: [4, 5.4],
          },
          commercialExamples:
            "Bateman's Salem Porter, Burton Bridge Burton Porter, Fuller's London Porter, Nethergate Old Growler Porter, RCH Old Slug Porter, Samuel Smith Taddy Porter",
          tags: 'standard-strength, dark-color, top-fermented, british-isles, traditional-style, porter-family, malty, roasty',
        },
        description:
          'Simply called "Porter" in Britain, the name "English Porter" is used to differentiate it from other derivative porters described in these guidelines.\n',
      },
    ],
  },
  {
    title: '14. Scottish Ale',
    description:
      "There are really only three traditional beer styles broadly available today in Scotland: the 70/- Scottish Heavy, the 80/- Scottish Export, and the Strong Scotch Ale (Wee Heavy, Style 17C). The 60/- Scottish Light is rare and often cask-only, but it does seem to be having a bit of a renaissance currently. All these styles took modern form after World War II, regardless of prior use of the same names. Currently, the 60/- is similar to a dark mild, the 70/- is similar to an ordinary bitter, and the 80/- similar to a best or strong bitter. The Scottish beers have a different balance and flavor profile, but fill a similar market position as those English beers.\nThe Light, Heavy, and Export beers have similar flavor profiles, and are often produced through the parti-gyling process. As gravity increases, so does the character of the beer. Traditional ingredients were dextrinous pale ale malt, corn, dark brewing sugars, and brewers caramel for coloring. Modern (post-WWII) recipes often add small amounts of dark malt and lower percentages of crystal malt, along with other ingredients like amber malt and wheat. Scottish brewers traditionally used single infusion mashes, often with underlet mashes and multiple sparges.\nIn general, these Scottish beers are weaker, sweeter, darker, lower in attenuation, and less highly hopped compared to equivalent modern English beers. They are produced using slightly cooler fermentation temperatures than their counterparts. Many of these differences have been exaggerated in popular lore; they are noticeable, but not huge, yet enough to affect the balance of the beer, and to perhaps indicate a national flavor preference. The balance remains malty and somewhat sweet due to higher finishing gravity, lower alcohol, and lower hopping rates. Many of these divergences from English beer took place between the late 1800s and the mid-1900s.\nProduction methods championed by homebrewers, such as kettle caramelization or grists heavy in a variety of crystal malts, are not commonly used in traditional products but can approximate those flavors when traditional ingredients aren't available. The use of peat-smoked malt is not only completely inauthentic, it produces a dirty, phenolic flavor inappropriate in any of these styles. Smoked versions (using any type smoke) should be entered in 32A Classic Style Smoked Beer.\nThe use of 'shilling' (/-) designations is a Scottish curiosity. Originally it referred to the price of beer in hogshead casks, which in no way could be constant over time. Shillings aren't even used as a currency now in Scotland. But the name stuck as a shorthand for a type of beer, even if the original meaning stopped being the real price during WWI. About all it means now is that larger numbers mean stronger beers, at least within the same brewery. Between the world wars, some breweries used the price per pint rather than shillings (e.g., Maclay 6d for 60/-, 7d for 70/-, 8d for 80/-). Confusingly, during this time 90/- pale ale was a low-gravity bottled beer. Curious, indeed.",
    styles: [
      {
        title: '14A. Scottish Light',
        properties: {
          overallImpression:
            'A low-alcohol, malty beer with light caramel, toast, toffee, and fruit flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying.',
          aroma:
            'Low to medium maltiness with caramel and toffee notes, and light toasty and sugary qualities that might be reminiscent of toasted breadcrumbs, ladyfingers, English biscuits, graham crackers, or butterscotch. Light pome fruitiness and light English hop aroma (earthy, floral, orange-citrus, spicy, etc.) allowable.',
          appearance: 'Deep copper to dark brown. Clear. Low to moderate, creamy off-white.',
          flavor:
            'Medium toasty-bready malt with caramel and toffee overtones, finishing with a slightly roasty dryness. A wide range of caramelized sugar and toasted bread type of flavors are possible, using similar descriptors as the aroma. Clean maltiness and fermentation profile. Light esters and hop flavor allowable (similar descriptors as aroma). Sufficient bitterness to not be cloying, but with a malty balance and aftertaste.',
          mouthfeel: 'Medium-low to medium body. Low to moderate carbonation. Maybe be moderately creamy.',
          comments:
            'See category introduction for detailed comments. May not seem as bitter as specifications indicate due to higher finishing gravity and residual sweetness. Typically a draught product, but somewhat rare. Do not mis-perceive the light roasty dryness as smoke; smoke is not present in these beers.',
          history:
            'See category introduction. The Shilling ale names were used for mild (unaged) beer before World War I, but the styles took modern form only after World War II.',
          characteristicIngredients:
            'At its simplest, pale ale malt, but can also use colored malt, sugars, corn, wheat, crystal malts, colorants, and a variety of other grains. Clean yeast. Soft water. No peat-smoked malt.',
          styleComparison:
            'See category introduction. Similar to other Scottish Ales but lower in alcohol, and darker in color. Similar in strength to the low end of Dark Mild, but with a different flavor profile and balance.',
          vitalStatistics: {
            OG: [1.03, 1.035],
            IBUs: [10, 20],
            FG: [1.01, 1.013],
            SRM: [17, 25],
            ABV: [2.5, 3.3],
          },
          commercialExamples: "Belhaven Best, McEwan's 60/-",
          tags: 'session-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, malty',
        },
      },
      {
        title: '14B. Scottish Heavy',
        properties: {
          overallImpression:
            'A lower-alcohol, malty beer with light caramel, toast, toffee, and fruity flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying.',
          aroma:
            'Medium-low to medium maltiness with caramel and toffee notes, and light toasty and sugary qualities that might be reminiscent of toasted breadcrumbs, ladyfingers, English biscuits, graham crackers, or butterscotch. Light pome fruitiness and light English hop aroma (earthy, floral, orange-citrus, spicy, etc.) allowable.',
          appearance: 'Pale copper to brown. Clear. Low to moderate, creamy off-white.',
          flavor:
            'Medium toasty-bready malt with caramel and toffee overtones, finishing with a slightly roasty dryness. A wide range of caramelized sugar and toasted bread type of flavors are possible, using similar descriptors as the aroma. Clean maltiness and fermentation profile. Light esters and hop flavor allowable (similar descriptors as aroma). Sufficient bitterness to not be cloying, but with a malty balance and aftertaste.',
          mouthfeel: 'Medium-low to medium body. Low to moderate carbonation. Maybe be moderately creamy.',
          comments:
            'See category introduction for detailed comments. May not seem as bitter as specifications indicate due to higher finishing gravity and residual sweetness. Do not mis-perceive the light roasty dryness as smoke; smoke is not present in these beers.',
          history:
            'See category introduction. The Shilling ale names were used for mild (unaged) beer before World War I, but the styles took modern form only after World War II.',
          characteristicIngredients:
            'At its simplest, pale ale malt and colored malt, but can also use sugars, corn, wheat, crystal malts, colorants, and a variety of other grains. Clean yeast. Soft water. No peat-smoked malt.',
          styleComparison:
            'See category introduction. Similar to other Scottish Ales in flavor profile, lighter in color and stronger than a Scottish Light. Similar in strength to Ordinary Bitter, but with a different flavor profile and balance.',
          vitalStatistics: {
            OG: [1.035, 1.04],
            IBUs: [10, 20],
            FG: [1.01, 1.015],
            SRM: [12, 20],
            ABV: [3.3, 3.9],
          },
          commercialExamples: "McEwan's 70/-, Orkney Raven Ale",
          tags: 'session-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, malty',
        },
      },
      {
        title: '14C. Scottish Export',
        properties: {
          overallImpression:
            'A moderate-strength, malty beer with light caramel, toast, toffee, and fruit flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying.',
          aroma:
            'Medium maltiness with caramel and toffee notes, and light toasty and sugary qualities that might be reminiscent of toasted breadcrumbs, ladyfingers, English biscuits, graham crackers, or butterscotch. Light pome fruitiness and light English hop aroma (earthy, floral, orange-citrus, spicy, etc.) allowable.',
          appearance: 'Pale copper to brown. Clear. Low to moderate, creamy off-white.',
          flavor:
            'Medium toasty-bready malt with caramel and toffee overtones, finishing with a slightly roasty dryness. A wide range of caramelized sugar and toasted bread type of flavors are possible, using similar descriptors as the aroma. Clean maltiness and fermentation profile. Light esters and hop flavor allowable (similar descriptors as aroma). Sufficient bitterness to not be cloying, but with a malty balance and aftertaste.',
          mouthfeel: 'Medium body. Medium-low to medium carbonation. Maybe be moderately creamy.',
          comments:
            'See category introduction for detailed comments. May not seem as bitter as specifications indicate due to higher finishing gravity and residual sweetness. Do not mis-perceive the light roasty dryness as smoke; smoke is not present in these beers. Americanized versions are often greater in strength (similar to American treatment of Irish Red Ales).',
          history:
            'See category introduction. The Shilling ale names were used for mild (unaged) beer before World War I, but the styles took modern form only after World War II.',
          characteristicIngredients:
            'At its simplest, pale ale malt and colored malt, but can also use sugars, corn, wheat, crystal malts, colorants, and a variety of other grains. Clean yeast. Soft water. No peat-smoked malt.',
          styleComparison:
            'See category introduction. Stronger than other Scottish Ales, but with a similar flavor profile. Similar in strength to Best Bitter and Strong Bitter, but with a different flavor profile and balance.',
          vitalStatistics: {
            OG: [1.04, 1.06],
            IBUs: [15, 30],
            FG: [1.01, 1.016],
            SRM: [12, 20],
            ABV: [3.9, 6],
          },
          commercialExamples:
            "Belhaven Scottish Ale, Broughton Wee Jock 80 Shilling, Caledonian Edinburgh Castle, McEwan's 80/-, McEwan's Export, Traquair Bear Ale",
          tags: 'standard-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, malty',
        },
      },
    ],
  },
  {
    title: '15. Irish Beer',
    description:
      'The traditional beers of Ireland contained in this category are amber to dark, top-fermented beers of moderate to slightly strong strength, and are often widely misunderstood due to differences in export versions, or overly focusing on the specific attributes of beer produced by high-volume, well-known breweries. Each of the styles in this grouping has a wider range than is commonly believed.',
    styles: [
      {
        title: '15A. Irish Red Ale',
        properties: {
          overallImpression:
            'An easy-drinking pint, often with subtle flavors. Slightly malty in the balance sometimes with an initial soft toffee or caramel sweetness, a slightly grainy-biscuity palate, and a touch of roasted dryness in the finish. Some versions can emphasize the caramel and sweetness more, while others will favor the grainy palate and roasted dryness.',
          aroma:
            'Low to moderate malt aroma, either neutral-grainy or with a lightly caramel, toast, or toffee character. Very light buttery character optional. Low earthy or floral hop aroma optional. Quite clean.',
          appearance:
            'Medium amber to medium reddish-copper color. Clear. Low off-white to tan colored head, average persistence.',
          flavor:
            'Moderate to very little caramel malt flavor and sweetness, rarely with a light buttered toast or toffee-like quality. The palate often is fairly neutral and grainy, or can take on a lightly toasty or biscuity note as it finishes with a light taste of roasted grain, which lends a characteristic dryness to the finish. A light earthy or floral hop flavor is optional. Medium to medium-low bitterness. Medium-dry to dry finish. Clean and smooth. Low esters optional. The balance tends to be slightly towards the malt, although light use of roasted grains may increase the perception of bitterness slightly.',
          mouthfeel:
            'Medium-light to medium body, although examples containing low levels of diacetyl may have a slightly slick mouthfeel (not required). Moderate carbonation. Smooth.',
          comments:
            'The style is fairly broad to allow for examples beyond the traditional ones from Ireland. Irish examples tend to be lower alcohol, grainier, and drier in the finish, while non-Irish versions are often higher in alcohol, sweeter, perhaps more caramelly and estery, and are often seasonal offerings.',
          history:
            'While Ireland has a long ale brewing heritage, the modern Irish Red Ale style is essentially an adaptation or interpretation of the popular English Bitter style with less hopping and a bit of roast to add color and dryness, although some suggest a longer history. Rediscovered as a craft beer style in Ireland, today it is an essential part of most brewery lineups, along with a pale ale and a stout.',
          characteristicIngredients:
            'Generally has a bit of roasted barley or black malt to provide reddish color and dry roasted finish. Pale base malt. Caramel malts were historically imported and more expensive, so not all brewers would use them.',
          styleComparison:
            'A less-bitter and hoppy Irish equivalent to an English Bitter, with a dryish finish due to roasted barley. More attenuated with less caramel flavor and body than equivalent-strength Scottish Ales.',
          vitalStatistics: {
            OG: [1.036, 1.046],
            IBUs: [18, 28],
            FG: [1.01, 1.014],
            SRM: [9, 14],
            ABV: [3.8, 5],
          },
          commercialExamples:
            "Franciscan Well Rebel Red, Kilkenny Irish Beer, Murphy's Irish Red, O'Hara's Irish Red Ale, Porterhouse Nitro Red Ale, Smithwick's Irish Ale",
          tags: 'standard-strength, amber-color, top-fermented, british-isles, traditional-style, amber-ale-family, balanced',
        },
      },
      {
        title: '15B. Irish Stout',
        properties: {
          overallImpression:
            'A black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry. Draught versions typically are creamy from a nitro pour, but bottled versions will not have this dispense-derived character. The roasted flavor can range from dry and coffee-like to somewhat chocolaty.',
          aroma:
            'Moderate coffee-like aroma typically dominates; may have slight dark chocolate, cocoa, or roasted grain secondary notes. Medium-low esters optional. Low earthy or floral hop aroma optional.',
          appearance:
            'Jet black to deep brown with garnet highlights in color. According to Guinness, "Guinness beer may appear black, but it is actually a very dark shade of ruby." Opaque. A thick, creamy, long-lasting, tan- to brown-colored head is characteristic when served on nitro, but don\'t expect a tight, creamy head on a bottled beer.',
          flavor:
            'Moderate roasted grain or malt flavor with a medium to high bitterness. The finish can be dry and coffee-like to moderately balanced with a touch of caramel or malty sweetness. Typically has coffee-like flavors, but also may have a bittersweet or unsweetened chocolate character in the palate, lasting into the finish. Balancing factors may include some creaminess, medium-low fruitiness, or medium earthy hop flavor. The level of bitterness is somewhat variable, as is the roasted character and the dryness of the finish; allow for interpretation by brewers.',
          mouthfeel:
            'Medium-light to medium-full body, with a somewhat creamy character - especially when served by nitro pour. Low to moderate carbonation. For the high hop bitterness and significant proportion of dark grains present, this beer is remarkably smooth. May have a light astringency from the roasted grains, although harshness is undesirable.',
          comments:
            'Traditionally a draught product. Modern examples are almost always associated with a nitro pour. Do not expect bottled beers to have the full, creamy texture or very long-lasting head associated with mixed-gas dispense. Regional differences exist in Ireland, similar to variability in English Bitters. Dublin-type stouts use roasted barley, are more bitter, and are drier. Cork-type stouts are sweeter, less bitter, and have flavors from chocolate and specialty malts.',
          history:
            'The style evolved from London porters, but reflecting a fuller, creamier, more "stout" body and strength. Guinness began brewing only porter in 1799, and a "stouter kind of porter" around 1810. Irish stout diverged from London single stout (or simply porter) in the late 1800s, with an emphasis on darker malts and roast barley. Guinness began using flaked barley after WWII, and Guinness Draught was launched as a brand in 1959. Draught ("widget") cans and bottles were developed in the late 1980s and 1990s.',
          characteristicIngredients:
            'Dark roasted malts or grains, enough to make the beer black in color. Pale malt. May use unmalted grains for body.',
          styleComparison:
            'Lower strength than an Irish Extra Stout. Darker in color (black) than an English Porter (brown).',
          vitalStatistics: {
            OG: [1.036, 1.044],
            IBUs: [25, 45],
            FG: [1.007, 1.011],
            SRM: [25, 40],
            ABV: [3.8, 5],
          },
          commercialExamples:
            "Beamish Irish Stout, Belhaven Black Stout, Guinness Draught, Murphy's Irish Stout, O'Hara's Irish Stout, Porterhouse Irish Stout",
          tags: 'standard-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, bitter, roasty',
        },
      },
      {
        title: '15C. Irish Extra Stout',
        properties: {
          overallImpression:
            'A fuller-bodied black beer with a pronounced roasted flavor, often similar to coffee and dark chocolate with some malty complexity. The balance can range from moderately bittersweet to bitter, with the more balanced versions having up to moderate malty richness and the bitter versions being quite dry.',
          aroma:
            'Moderate to moderately high coffee-like aroma, often with slight dark chocolate, cocoa, biscuit, vanilla, or roasted grain secondary notes. Medium-low esters optional. Hop aroma low to none, may be lightly earthy or spicy, but is typically absent. Malt and roast dominate the aroma.',
          appearance: 'Jet black. Opaque. A thick, creamy, persistent tan head is characteristic.',
          flavor:
            'Moderate to moderately high dark-roasted grain or malt flavor with a medium to medium-high bitterness. The finish can be dry and coffee-like to moderately balanced with up to moderate caramel or malty sweetness. Typically has roasted coffee-like flavors, but also often has a dark chocolate character in the palate, lasting into the finish. Background mocha or biscuit flavors are often present and add complexity. Medium-low fruitiness optional. Medium earthy or spicy hop flavor optional. The level of bitterness is somewhat variable, as is the roasted character and the dryness of the finish; allow for interpretation by brewers.',
          mouthfeel:
            'Medium-full to full body, with a somewhat creamy character. Moderate carbonation. Very smooth. May have a light astringency from the roasted grains, although harshness is undesirable. A slightly warming character may be detected.',
          comments:
            'Traditionally a stronger, bottled product with a range of equally valid possible interpretations, varying most frequently in roast flavor and sweetness. Most traditional Irish commercial examples are in the 5.6 to 6.0% ABV range.',
          history:
            'Same roots as Irish Stout, but as a stronger product. Guinness Extra Stout (Extra Superior Porter, later Double Stout) was first brewed in 1821, and was primarily a bottled product.',
          characteristicIngredients: 'Similar to Irish Stout. May have additional dark crystal malts or dark sugars.',
          styleComparison:
            'Midway between an Irish Stout and a Foreign Extra Stout in strength and flavor intensity, although with a similar balance. More body, richness, and often malt complexity than an Irish Stout. Black in color, not brown like an English Porter.',
          vitalStatistics: {
            OG: [1.052, 1.062],
            IBUs: [35, 50],
            FG: [1.01, 1.014],
            SRM: [30, 40],
            ABV: [5, 6.5],
          },
          commercialExamples: "Guinness Extra Stout, O'Hara's Leann Folláin, Porterhouse XXXX, Sheaf Stout",
          tags: 'high-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, bitter, roasty',
        },
      },
    ],
  },
  {
    title: '16. Dark British Beer',
    description:
      'This category contains average to strong, bitter to sweet, modern British and Irish stouts that originated in England even if some are now more widely associated with Ireland. In this case, "British" means the broader British Isles not Great Britain.',
    styles: [
      {
        title: '16A. Sweet Stout',
        properties: {
          overallImpression:
            'A very dark, sweet, full-bodied, slightly roasty stout that can suggest coffee-and-cream, or sweetened espresso.',
          aroma:
            'Mild roasted grain aroma, sometimes with coffee or chocolate notes. An impression of cream-like sweetness often exists. Fruitiness can be low to moderately high. Low diacetyl optional. Low floral or earthy hop aroma optional.',
          appearance: 'Very dark brown to black in color. Clear, if not opaque. Creamy tan to brown head.',
          flavor:
            'Dark, roasted, coffee or chocolate flavors dominate the palate. Low to moderate fruity esters. Moderate bitterness. Medium to high sweetness provides a counterpoint to the roasted character and bitterness, lasting into the finish. The balance between dark grains or malts and sweetness can vary, from quite sweet to moderately dry and somewhat roasty. Low diacetyl optional. Low floral or earthy hop flavor optional.',
          mouthfeel:
            'Medium-full to full-bodied and creamy. Low to moderate carbonation. High residual sweetness from unfermented sugars enhances the full-tasting mouthfeel.',
          comments:
            'Gravities are low in Britain (sometimes lower than the statistics below), higher in exported and US products. Variations exist, with the level of residual sweetness, the intensity of the roast character, and the balance between the two being the variables most subject to interpretation.',
          history:
            'An English style of stout developed in the early 1900s. Historically known as "Milk" or "Cream" stouts, legally this designation is no longer permitted in England but may be acceptable elsewhere. The "milk" name is derived from the use of the milk sugar lactose as a sweetener. Originally marketed as a tonic for invalids and nursing mothers.',
          characteristicIngredients:
            'Base of pale malt with dark malts or grains. May use grain or sugar adjuncts. Lactose is frequently added to provide additional residual sweetness.',
          styleComparison:
            'Much sweeter and less bitter-tasting than other stouts, except the stronger Tropical Stout. The roast character is mild, not burnt like other stouts. Can be similar in balance to Oatmeal Stout, albeit with more sweetness.',
          vitalStatistics: {
            OG: [1.044, 1.06],
            IBUs: [20, 40],
            FG: [1.012, 1.024],
            SRM: [30, 40],
            ABV: [4, 6],
          },
          commercialExamples:
            "Bristol Beer Factory Milk Stout, Firestone Nitro Merlin Milk Stout, Left Hand Milk Stout, Lancaster Milk Stout, Mackeson's XXX Stout, Marston's Pearl Jet Stout",
          tags: 'standard-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, malty, roasty, sweet',
        },
      },
      {
        title: '16B. Oatmeal Stout',
        properties: {
          overallImpression:
            'A dark, roasty, full-bodied stout with enough sweetness to support the oat backbone. The sweetness, balance, and oatmeal impression can vary considerably.',
          aroma:
            'Mild grainy, roasty, coffee-like character with a light malty sweetness that can give a coffee-and-cream impression. Low to medium-high fruitiness. Medium-low earthy or floral hop aroma optional. A light grainy-nutty oatmeal aroma is optional. Medium-low diacetyl optional but typically absent.',
          appearance:
            'Brown to black in color. Thick, creamy, persistent tan- to brown-colored head. Clear, if not opaque.',
          flavor:
            'Similar to the aroma, with a mild roasted coffee, milk chocolate, or coffee-and-cream flavor, and low to moderately-high fruitiness. Oats can add a toasty-nutty, grainy, or earthy flavor. Medium bitterness. Medium-sweet to medium-dry finish, which affects the perception of balance. Malty, roasty, nutty aftertaste. Medium-low earthy or floral hop flavor optional. Medium-low diacetyl optional but typically absent.',
          mouthfeel:
            'Medium-full to full body, with a smooth, silky, velvety, sometimes an almost oily slickness from the oatmeal. Creamy. Medium to medium-high carbonation. Stronger versions may be lightly warming.',
          comments:
            'When judging, allow for differences in balance and interpretation. American versions tend to be more hoppy, less sweet, and less fruity than English examples. Bitterness, sweetness, and oatmeal impression varies. Light use of oatmeal may give a certain silkiness of body and richness of flavor, while heavy use of oatmeal can be fairly intense in flavor with an almost oily mouthfeel and dryish finish.',
          history:
            "A variant of nourishing or invalid stouts around 1900 using oatmeal in the grist, similar to but independent of the development of sweet stout using lactose. An original Scottish version used a significant amount of oat malt. Later went through a shady phase where some English brewers would throw a handful of oats into their parti-gyled stouts in order to legally produce a 'healthy' Oatmeal Stout for marketing purposes. Most popular in England between the World Wars, was revived in the craft beer era for export, which helped lead to its adoption as a popular modern American craft beer style that uses a noticeable (not symbolic) quantity of oats.",
          characteristicIngredients:
            'Pale, caramel, and dark roasted malts (often chocolate) and grains. Oatmeal or malted oats (5-20% or more). Hops primarily for bittering. Can use brewing sugars or syrups. English ale yeast.',
          styleComparison:
            'Most are like a cross between an Irish Extra Stout and a Sweet Stout with oatmeal added. Several variations exist, with the sweeter versions more like a Sweet Stout with oatmeal instead of lactose, and the drier versions more like a more nutty, flavorful Irish Extra Stout. Both tend to emphasize the body and mouthfeel.',
          vitalStatistics: {
            OG: [1.045, 1.065],
            IBUs: [25, 40],
            FG: [1.01, 1.018],
            SRM: [22, 40],
            ABV: [4.2, 5.9],
          },
          commercialExamples:
            "Anderson Valley Barney Flats Oatmeal Stout, Broughton Stout Jock, St-Ambroise Oatmeal Stout, Samuel Smith Oatmeal Stout, Summit Oatmeal Stout, Young's London Stout",
          tags: 'standard-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, balanced, roasty',
        },
      },
      {
        title: '16C. Tropical Stout',
        properties: {
          overallImpression:
            'A very dark, sweet, fruity, moderately strong stout with smooth, roasty flavors, yet no burnt harshness.',
          aroma:
            'Moderate to high intensity sweetness is prominent. Moderate to high coffee or chocolate roasty aroma, but not burnt. Medium to high fruitiness. May have a molasses, licorice, burnt sugar, dried fruit, or vinous aromatics. Stronger versions can have a subtle, clean aroma of alcohol. Low hop aroma optional. Low diacetyl optional.',
          appearance:
            'Very deep brown to black in color. Clarity usually obscured by deep color. Clear, if not opaque. Large tan to brown head with good retention.',
          flavor:
            'Quite sweet with a smooth dark grain flavors, and restrained, medium-low to medium bitterness. Smooth, roasty flavor, often like coffee or chocolate, although moderated in the balance by the sweet finish. No burnt malt flavor or harsh bite in the finish. Moderate to high fruity esters. Can have a sweet, dark rum, molasses, or burnt sugar-like quality. Low hop flavor optional. Medium-low diacetyl optional.',
          mouthfeel:
            'Medium-full to full body, often with a smooth, creamy character. May have a warming but not hot alcohol presence. Moderate to moderately-high carbonation.',
          comments:
            'Surprisingly refreshing in a hot climate. Sweetness levels can vary significantly. Tropical implies that the beer originated in and is popular in the tropics, not that it has characteristics of tropical fruit from hops or fruit.',
          history:
            'A local adaptation of Foreign Extra Stouts brewed with indigenous ingredients and methods in the Caribbean and other tropical markets. Bitterness lower than export-type stouts since these beers do not have to be shipped abroad, and to suit local palate preferences.',
          characteristicIngredients:
            'Similar to a Sweet Stout, but higher gravity. Pale and dark roasted malts and grains. Hops mostly for bitterness. May use adjuncts and sugar to boost gravity. Typically made with warm-fermented lager yeast.',
          styleComparison:
            'Tastes like a scaled-up Sweet Stout with higher fruitiness. Similar to some Imperial Stouts without the high bitterness, strong or burnt roastiness, and late hops, and with lower alcohol. Much sweeter and less hoppy than American Stouts. Much sweeter and less bitter than the similar-gravity Foreign Extra Stouts.',
          vitalStatistics: {
            OG: [1.056, 1.075],
            IBUs: [30, 50],
            FG: [1.01, 1.018],
            SRM: [30, 40],
            ABV: [5.5, 8],
          },
          commercialExamples:
            'ABC Extra Stout, Bahamian Strong Back Stout, Dragon Stout, Jamaica Stout, Lion Stout, Royal Extra Stout',
          tags: 'high-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, malty, roasty, sweet',
        },
      },
      {
        title: '16D. Foreign Extra Stout',
        properties: {
          overallImpression: 'A very dark, rich, moderately strong, fairly dry stout with prominent roast flavors.',
          aroma:
            'Moderate to high roast, like coffee, dark chocolate, or lightly burnt grain. Low to medium fruitiness. May have a sweet aroma, or molasses, licorice, dried fruit, or vinous aromatics. Stronger versions can have a subtle, clean aroma of alcohol. Low earthy, herbal, or floral hop aroma optional. Low diacetyl optional.',
          appearance:
            'Very deep brown to black in color. Clarity usually obscured by deep color. Clear, if not opaque. Large tan to brown head with good retention.',
          flavor:
            'Moderate to high roast, like coffee, dark chocolate, or lightly burnt grain, although without a sharp bite. Low to medium esters. Medium to high bitterness. Moderately dry finish. Moderate earthy, herbal, or floral hop flavor optional. Medium-low diacetyl optional.',
          mouthfeel:
            'Medium-full to full body, often with a smooth, sometimes creamy character. May have a warming but not hot alcohol presence. Moderate to moderately-high carbonation.',
          comments:
            'Also known as Foreign Stout, Export Stout, and Foreign Export Stout. Historic versions (before WWI, at least) had the same OG as domestic Extra Stouts, but depending on the brewery could have had a higher ABV because it had a long secondary with Brett chewing away at it. The difference between domestic and foreign versions were the hopping and length of maturation.',
          history:
            'Stronger stouts brewed for the export market today, but with a history stretching back to the 18th and 19th centuries when they were more heavily-hopped versions of stronger export stouts. Vatted originally, but Guinness stopped this practice in the 1950s. Guinness Foreign Extra Stout (originally, West India Porter, later Foreign Extra Double Stout) was first brewed in 1801 according to Guinness with "extra hops to give it a distinctive taste and a longer shelf life in hot weather."',
          characteristicIngredients:
            'Pale and dark roasted malts and grains, historically also could have used brown and amber malts. Hops mostly for bitterness, typically English varieties. May use adjuncts and sugar to boost gravity.',
          styleComparison:
            'Similar in balance to an Irish Extra Stout, but with more alcohol. Not as big or intense as an Imperial Stout. Lacking the strong bitterness and high late hops of American Stout. Similar gravity as Tropical Stout, but with a drier finish and higher bitterness.',
          vitalStatistics: {
            OG: [1.056, 1.075],
            IBUs: [50, 70],
            FG: [1.01, 1.018],
            SRM: [30, 40],
            ABV: [6.3, 8],
          },
          commercialExamples:
            'Coopers Best Extra Stout, Guinness Foreign Extra Stout, The Kernel Export Stout London 1890, La Cumbre Malpais Stout, Pelican Tsunami Export Stout, Ridgeway Foreign Export Stout',
          tags: 'high-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, balanced, roasty',
        },
      },
    ],
  },
  {
    title: '17. Strong British Ale',
    description:
      'This category contains stronger, non-roasty ales of the British Isles.  Covers the style space above bitters, milds, and brown ales while excluding porters and stouts.',
    styles: [
      {
        title: '17A. British Strong Ale',
        properties: {
          overallImpression:
            'An ale of respectable alcoholic strength, traditionally bottled-conditioned and cellared. Can have a wide range of interpretations, but most will have varying degrees of malty richness, late hops and bitterness, fruity esters, and alcohol warmth. The malt and adjunct flavors and intensity can vary widely, but any combination should result in an agreeable palate experience.',
          aroma:
            "Malty-sweet with fruity esters, often with a complex blend of dried-fruit, caramel, nuts, toffee, or other specialty malt aromas. Some alcohol notes are acceptable, but shouldn't be hot or solventy. Hop aromas can vary widely, but typically have earthy, resiny, fruity, or floral notes. The balance can vary widely, but most examples will have a blend of malt, fruit, hops, and alcohol in varying intensities.",
          appearance:
            'Amber to dark reddish-brown color; many are fairly dark. Generally clear, although darker versions may be almost opaque. Moderate to low cream- to light tan-colored head with average retention.',
          flavor:
            'Medium to high malt character often rich with nutty, toffee, or caramel flavors. Light chocolate notes are sometimes found in darker beers. May have interesting flavor complexity from brewing sugars. Balance is often malty, but may be well hopped, which affects the impression of maltiness. Moderate fruity esters are common, often with a dark fruit or dried fruit character. The finish may vary from medium dry to somewhat sweet. Alcoholic strength should be evident, not overwhelming. Low diacetyl optional, but generally not desirable.',
          mouthfeel:
            'Medium to full, chewy body. Alcohol warmth is often evident and always welcome. Low to moderate carbonation. Smooth texture.',
          comments:
            "An entry category more than a style; the strength and character of examples can vary widely. Fits in the style space between normal gravity beers and Barley Wines. Can include pale malty-hoppy beers, English winter warmers, strong dark milds, smaller Burton ales, and other unique beers in the general gravity range that don't fit other categories. Judges should allow for a significant range in character, as long as the beer is within the alcohol strength range and has an interesting 'British' character, it likely fits the style.",
          history:
            "A collection of unrelated minor styles, each of which has its own heritage. Do not use this category grouping to infer a historical relationship between examples - none is intended. This is a modern British specialty judging category where the 'special' attribute is alcohol level.",
          characteristicIngredients:
            'Grists vary, often based on pale malt with caramel and specialty malts. Some darker examples suggest a light use of dark malts (e.g., chocolate, black malt). Sugary and starchy adjuncts (e.g., maize, flaked barley, wheat) are common. Finishing hops are traditionally English.',
          styleComparison:
            'Significant overlap in gravity with Old Ale, but not having an aged character. A wide range of interpretations is possible. Should not be as rich or strong as an English Barley Wine. Stronger than the stronger everyday Strong Bitter, British Brown Ale, and English Porter. More specialty malt or sugar character than American Strong Ale.',
          vitalStatistics: {
            OG: [1.055, 1.08],
            IBUs: [30, 60],
            FG: [1.015, 1.022],
            SRM: [8, 22],
            ABV: [5.5, 8],
          },
          commercialExamples:
            "Fuller's 1845, Harvey's Elizabethan Ale, J.W. Lees Moonraker, McEwan's Champion, Samuel Smith's Winter Welcome, Shepherd Neame 1698",
          tags: 'high-strength, amber-color, top-fermented, british-isles, traditional-style, strong-ale-family, malty',
        },
      },
      {
        title: '17B. Old Ale',
        properties: {
          overallImpression:
            'A stronger-than-average English ale, though usually not as strong or rich as an English Barley Wine, but usually malty. Warming. Shows positive maturation effects of a well-kept, aged beer.',
          aroma:
            'Malty-sweet with fruity esters, often with a complex blend of dried fruit, vinous, caramel, molasses, toffee, light treacle, or other specialty malt aromas. Some alcohol and nutty oxidative notes are acceptable, akin to those found in Sherry, Port, or Madeira. Hop aroma not usually present.',
          appearance:
            'Deep amber to very dark reddish-brown color, but most are fairly dark. Age and oxidation may darken the beer further. Clear, but can be almost opaque. Moderate to low cream- to light tan-colored head; retention average to poor.',
          flavor:
            'Medium to high malt character with a luscious malt complexity, often with nut, caramel, or molasses-like flavors. Light chocolate or roasted malt flavors are optional, but should never be prominent. Balance is often malty-sweet, but may be well hopped; the impression of bitterness often depends on amount of aging. Moderate to high fruity esters are common, and may take on a dried-fruit or vinous character. The finish may vary from dry to somewhat sweet. Extended aging may contribute oxidative flavors similar to a fine old Sherry, Port, or Madeira. Alcoholic strength should be evident, though not overwhelming. Low diacetyl optional.',
          mouthfeel:
            'Medium to full, chewy body, although older examples may be lower in body due to continued attenuation during conditioning. Alcohol warmth is often evident and always welcome. Low to moderate carbonation, depending on age and conditioning. Light acidity may be present, as well as some tannin if wood-aged; both are optional.',
          comments:
            'Strength and character vary widely. The predominant defining quality for this style is the impression of age, which can manifest itself in different ways (complexity, oxidation, leather, vinous qualities, etc.). Many of these qualities are otherwise faults, but if the resulting character of the beer is pleasantly drinkable and complex, then those characteristics are acceptable. In no way should those allowable characteristics be interpreted as making an undrinkably off-flavored beer as somehow in style. Old Peculier is a well-known but fairly unique beer that is quite different than other Old Ales.',
          history:
            'Historically, an aged ale used as stock ales for blending or enjoyed at full strength (stale or stock refers to beers that were aged or stored for a significant period of time). There are at least two definite types in Britain today, weaker, unaged draught ones that are similar to milds of around 4.5%, and stronger aged ones that are often 6-8% or more.',
          characteristicIngredients:
            'Composition varies, although generally similar to British Strong Ales. The age character is the biggest driver of the final style profile, which is more handling than brewing.',
          styleComparison:
            'Roughly overlapping the British Strong Ale and the lower end of the English Barley Wine styles, but always having an aged quality. The distinction between an Old Ale and a Barley Wine is somewhat arbitrary above 7% ABV, and generally means having a more significant aged quality.',
          vitalStatistics: {
            OG: [1.055, 1.088],
            IBUs: [30, 60],
            FG: [1.015, 1.022],
            SRM: [10, 22],
            ABV: [5.5, 9],
          },
          commercialExamples:
            'Avery Old Jubilation, Berlina Old Ale, Greene King Strong Suffolk Ale, Marston Owd Roger, Theakston Old Peculier',
          tags: 'high-strength, amber-color, top-fermented, british-isles, traditional-style, strong-ale-family, malty, aged',
        },
      },
      {
        title: '17C. Wee Heavy',
        properties: {
          overallImpression:
            'Rich, sweet malt depth with caramel, toffee, and fruity flavors. Full-bodied and chewy, with warming alcohol. Restrained bitterness, but not cloying or syrupy.',
          aroma:
            'Strong bready-toasty malt, with a high caramel and toffee aspect. A wide range of supportive caramelized sugar and toasty bread type aromas are possible (toasted breadcrumbs, ladyfingers, English biscuits, graham crackers, nougat, butterscotch, etc.). Faint hint of roast is sometimes noted. Low to moderate dark or dried fruit esters and alcohol. Very low earthy, floral, orange-citrus, or spicy hops optional.',
          appearance:
            'Light copper to dark brown color, often with deep ruby highlights. Clear. Usually has a large tan head, which may not persist. Legs may be evident in stronger versions.',
          flavor:
            'Rich, bready-toasty malt that is often full and sweet on the palate with caramel and toffee flavors, but balanced by alcohol and a hint of grainy roast in the finish. The malt often has caramelized sugar and toasty flavors of the same type as described in the aroma. Medium to low alcohol and esters (plums, raisins, dried fruit, etc.). Bitterness low in the balance, giving a sweet to medium-dry finish. Medium-low hop flavor optional, with similar descriptors as the aroma.',
          mouthfeel:
            'Medium-full to full-bodied, sometimes with a thick, chewy, sometimes creamy, viscosity. A smooth alcohol warmth is usually present and is desirable since it balances the malty sweetness. Moderate carbonation.',
          comments:
            'A range of strengths is allowable; not all versions are very strong. Also known as "Strong Scotch Ale," the term "wee heavy" means "small strong" and traces to the beer that made the term famous, Fowler\'s Wee Heavy, a 12 Guinea Ale.',
          history:
            'Descended from Edinburgh Ales, a stronger malty beer brewed in a range of strengths, similar to Burton Ale (although at half the hopping rate). Modern versions have two main variants, a more modest 5% ABV beer and the more widely known 8-9% ABV beer.  As gravities decreased over times, some of the variations ceased to be produced.',
          characteristicIngredients:
            'Scottish pale ale malt, a wide range of other ingredients are possible, including adjuncts. Some may use crystal malt or darker grains for color. No peat-smoked malt.',
          styleComparison: 'Somewhat similar to an English Barley Wine, but often darker and more caramelly.',
          vitalStatistics: {
            OG: [1.07, 1.13],
            IBUs: [17, 35],
            FG: [1.018, 1.04],
            SRM: [14, 25],
            ABV: [6.5, 10],
          },
          commercialExamples:
            "Belhaven Wee Heavy, Broughton Old Jock, McEwan's Scotch Ale, Orkney Skull Splitter, Traquair House Ale, The Duck-Rabbit Wee Heavy Scotch-Style Ale",
          tags: 'high-strength, amber-color, top-fermented, british-isles, traditional-style, strong-ale-family, malty',
        },
        description: 'See Category 14 Scottish Ale introduction for general characteristics of Scottish beer.\n',
      },
      {
        title: '17D. English Barley Wine',
        properties: {
          overallImpression:
            'A strong and richly malty ale with a pleasant fruity or hoppy depth. A wintertime sipper with a full, chewy body and warming alcohol.',
          aroma:
            'Very rich, strongly malty, often with a caramel-like aroma in darker versions or a light toffee character in paler versions. May have a rich character including bready, toasty, or toffee notes. May have moderate to strong fruitiness, often with a dark- or dried-fruit character, particularly in dark versions. The hop aroma may range from mild to assertive, and is typically floral, earthy, tea-like, or marmalade-like. Alcohol may be low to moderate, but are soft and rounded. Aromatic intensity subsides with age, and can develop a quality like sherry, wine, or port.',
          appearance:
            'Color ranging from golden amber to dark brown, often with ruby highlights and significant depth of color. Should not be black or opaque. Low to moderate off-white head. May have low head retention. Brilliant clarity, particularly when aged, although younger versions can have a little haze. High alcohol and viscosity may be visible as legs.',
          flavor:
            'Medium to high rich, malty sweetness, often complex and multi-layered, with bread, biscuit, and caramel malt flavors (more toffee-like in paler versions) and having a medium to high fruitiness (often with dark or dried fruit aspects). When aged, these fruity components come out more, and darker versions will have a higher level than paler ones. The hop aroma, flavor, and bitterness can vary wildly. Light to strong hops, with an English character (floral, earthy, tea, or marmalade-like) are common. Bitterness can be light to fairly strong, fading with time, so the balance can be malty to somewhat bitter. Stronger versions will have a little alcohol character. The finish and aftertaste can be moderately dry to moderately sweet, often depending on age.\nAged versions may develop complex oxidative or vinous flavors at a noticeable but not prominent level. Pale versions typically seem more bitter, better attenuated, and more hop-forward than darker versions.',
          mouthfeel:
            "Full-bodied and chewy, with a velvety, luscious texture, declining with age. A smooth warmth from aged alcohol should be present, but shouldn't burn. Carbonation may be low to moderate, depending on age and conditioning.",
          comments:
            'The richest and strongest of modern English Ales. Their character can change significantly over time; both young and old versions should be appreciated for what they are. The malt profile can vary widely; not all examples will have all possible flavors or aromas. Paler varieties won\'t have the caramel and richer malt flavors, nor will they typically have the darker dried fruits - don\'t expect flavors and aromatics that are impossible from a beer of that color. Typically written as "Barley Wine" in the UK, and "Barleywine" in the US.',
          history:
            'A modern descendent of the strongest Burton Ales. Bass No. 1 was first called a barley wine in 1872. Traditionally a darker beer until Tennant (now Whitbread) first produced Gold Label, a gold-colored version in 1951. The original style that inspired derivative variations in Belgium, the United States, and elsewhere in the world.',
          characteristicIngredients:
            'British pale ale and crystal malts. Limited use of dark malts. Often uses brewing sugars. English hops. British yeast.',
          styleComparison:
            'Less hoppy and bitter, maltier and fruitier than American Barleywine. Can overlap Old Ale on the lower end of the range, but without heavier signs of age. Not as caramelly and often not as sweet as a Wee Heavy.',
          vitalStatistics: {
            OG: [1.08, 1.12],
            IBUs: [35, 70],
            FG: [1.018, 1.03],
            SRM: [8, 22],
            ABV: [8, 12],
          },
          commercialExamples:
            "Burton Bridge Thomas Sykes Old Ale, Coniston No. 9 Barley Wine, Fuller's Golden Pride, Hogs Back A over T, J.W. Lee's Vintage Harvest Ale, Robinson's Old Tom",
          tags: 'very-high-strength, amber-color, top-fermented, british-isles, traditional-style, strong-ale-family, malty',
        },
      },
    ],
  },
  {
    title: '18. Pale American Ale',
    description:
      'This category contains modern American ales of average strength and light color that are moderately malty to moderately bitter.',
    styles: [
      {
        title: '18A. Blonde Ale',
        properties: {
          overallImpression:
            'Easy-drinking, approachable, malt-oriented American craft beer, often with interesting fruit, hop, or character malt notes. Well-balanced and clean, is a refreshing pint without aggressive flavors.',
          aroma:
            'Light to moderate malty aroma, generally neutral or grainy, possibly with a light bread or caramel note. Low to moderate fruitiness is optional, but acceptable. May have a low to medium hop aroma, and can reflect almost any hop variety although citrusy, floral, fruity, and spicy notes are common. Clean fermentation profile.',
          appearance:
            'Light yellow to deep gold in color. Clear to brilliant. Low to medium white head with fair to good retention.',
          flavor:
            "Initial soft maltiness, but can also have light character malt flavor (e.g., bread, toast, biscuit, wheat). Caramel flavors usually absent; if present, they are typically low-color caramel or honey notes. Low to medium fruity esters optional, but are welcome. Light to moderate hop flavor (any variety), but shouldn't be overly aggressive. Medium-low to medium bitterness, but the balance is normally towards the malt or even between malt and hops. Finishes medium-dry to slightly malty; an impression of sweetness is often an expression of lower bitterness than actual residual sweetness. Clean fermentation profile.",
          mouthfeel: 'Medium-light to medium body. Medium to high carbonation. Smooth without being heavy.',
          comments:
            'Oxidized versions can develop caramel or honey notes, which should not be mistaken for similar malt-derived flavors. Sometimes known as Golden Ale or simply a Gold.',
          history:
            'An American craft beer style produced as a faster-produced alternative to standard American lagers. First believed to be produced in 1987 at Catamount. Often positioned as an entry-level house ale.',
          characteristicIngredients:
            'Generally all-malt, but can include wheat malt or sugar adjuncts. Any hop variety can be used. Clean American, lightly fruity English, or Kölsch yeast. May also be made with lager yeast, or cold-conditioned.',
          styleComparison:
            'Typically has more flavor than American Lager and Cream Ale. Less bitterness than an American Pale Ale. Perhaps similar to some maltier examples of Kölsch.',
          vitalStatistics: {
            OG: [1.038, 1.054],
            IBUs: [15, 28],
            FG: [1.008, 1.013],
            SRM: [3, 6],
            ABV: [3.8, 5.5],
          },
          commercialExamples:
            'Firestone Walker 805, Kona Big Wave Golden Ale, Real Ale Firemans #4 Blonde Ale, Russian River Aud Blonde, Victory Summer Love, Widmer Citra Summer Blonde Brew',
          tags: 'standard-strength, pale-color, any-fermentation, north-america, craft-style, pale-ale-family, balanced',
        },
      },
      {
        title: '18B. American Pale Ale',
        properties: {
          overallImpression:
            'An average-strength, hop-forward, pale American craft beer with sufficient supporting malt to make the beer balanced and drinkable. The clean hop presence can reflect classic or modern American or New World hop varieties with a wide range of characteristics.',
          aroma:
            'Moderate to moderately-high hop aroma from American or New World hop varieties with a wide range of possible characteristics, including citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon. None of these specific characteristics are required, but a hoppy aroma should be apparent. Low to moderate neutral to grainy maltiness supports the hop presentation, and can show low amounts of specialty malt character (e.g., bread, toast, biscuit, caramel). Fruity esters optional, up to moderate in strength. Fresh dry-hop aroma optional.',
          appearance:
            'Pale golden to amber. Moderately large white to off-white head with good retention. Generally quite clear.',
          flavor:
            "Hop and malt character similar to aroma (same intensities and descriptors apply). Caramel flavors are often absent or fairly restrained, but are acceptable as long as they don't clash with the hops. Moderate to high bitterness. Clean fermentation profile. Fruity yeast esters can be moderate to none, although many hop varieties are quite fruity. Medium to dry finish. The balance is typically towards the late hops and bitterness; the malt presence should be supportive, not distracting. Hop flavor and bitterness often linger into the finish, but the aftertaste should generally be clean and not harsh. Fresh dry-hop flavor optional.",
          mouthfeel:
            'Medium-light to medium body. Moderate to high carbonation. Overall smooth finish without astringency or harshness.',
          comments:
            'Modern American versions are often just lower gravity IPAs. Traditionally was a style that allowed for experimentation with hop varieties and usage methods, which can now often be found as international adaptations in countries with an emerging craft beer market. Judges should allow for characteristics of modern American or New World hops as they are developed and released.',
          history:
            'A modern American craft beer era adaptation of English pale ale, reflecting indigenous ingredients. Sierra Nevada Pale Ale was first made in 1980 and helped popularize the style. Prior to the explosion in popularity of IPAs, this style was the most well-known and popular of American craft beers.',
          characteristicIngredients:
            'Neutral pale malt. American or New World hops. Neutral to lightly fruity American or English ale yeast. Small amounts of various specialty malts.',
          styleComparison:
            'Typically lighter in color, cleaner in fermentation profile, and having fewer caramel flavors than English counterparts. There can be some overlap in color between American Pale Ale and American Amber Ale. The American Pale Ale will generally be cleaner, have a less caramelly malt profile, less body, and often more finishing hops. Less bitterness in the balance and alcohol strength than an American IPA. Maltier, more balanced and drinkable, and less intensely hop-focused and bitter than session-strength American IPAs (aka Session IPAs). More bitter and hoppy than a Blonde Ale.',
          vitalStatistics: {
            OG: [1.045, 1.06],
            IBUs: [30, 50],
            FG: [1.01, 1.015],
            SRM: [5, 10],
            ABV: [4.5, 6.2],
          },
          commercialExamples:
            'Deschutes Mirror Pond Pale Ale, Half Acre Daisy Cutter Pale Ale, Great Lakes Burning River, La Cumbre Acclimated APA, Sierra Nevada Pale Ale, Stone Pale Ale 2.0',
          tags: 'standard-strength, pale-color, top-fermented, north-america, craft-style, pale-ale-family, bitter, hoppy',
        },
      },
    ],
  },
  {
    title: '19. Amber and Brown American Beer',
    description:
      'This category contains modern American amber and brown top-fermented ales and warm-fermented lagers of standard strength that can be balanced to bitter.',
    styles: [
      {
        title: '19A. American Amber Ale',
        properties: {
          overallImpression:
            'An amber, hoppy, moderate-strength American craft beer with a malty caramel flavor. The balance can vary quite a bit, with some versions being fairly malty and others being aggressively hoppy. Hoppy and bitter versions should not have clashing flavors with the caramel malt profile.',
          aroma:
            'Low to moderate hop aroma reflective of American or New World hop varieties (citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon). A citrusy hop character is common, but not required. Moderately-low to moderately-high maltiness, usually with a moderate caramel character, that can either support, balance, or sometimes mask the hop presentation. Esters vary from moderate to none.',
          appearance:
            'Deep amber to coppery-brown in color, sometimes with a reddish hue. Moderately large off-white head with good retention. Generally quite clear.',
          flavor:
            'Moderate to high hop flavor with similar characteristics as the aroma. Malt flavors are moderate to strong, and usually show an initial malty sweetness followed by a moderate caramel flavor and sometimes toasty or biscuity malt flavors in lesser amounts. Dark or roasted malt flavors absent. Moderate to moderately-high bitterness. Balance can vary from somewhat malty to somewhat bitter. Fruity esters can be moderate to none. Caramel sweetness, hop flavor, and bitterness can linger somewhat into the medium to full yet dry finish.',
          mouthfeel:
            'Medium to medium-full body. Medium to high carbonation. Overall smooth finish without astringency. Stronger versions may have a slight alcohol warmth.',
          comments:
            'Can overlap in color with darker American pale ales, but with a different malt flavor and balance. A range of balance exists in this style, from balanced and malty to more aggressively hopped.',
          history:
            'A modern American craft beer style developed as a variation from American Pale Ales. Mendocino Red Tail Ale was first made in 1983, and was known regionally as a Red Ale. This served as the progenitor of Double Reds (American Strong Ale), Red IPAs, and other hoppy, caramelly beers.',
          characteristicIngredients:
            'Neutral pale ale malt. Medium to dark crystal malts. American or New World hops, often with citrusy flavors, are common but others may also be used. Neutral to lightly estery yeast.',
          styleComparison:
            'Darker, more caramelly, more body, and generally less bitter in the balance than American Pale Ales. Less alcohol, bitterness, and hop character than Red IPAs. Less strength, malt, and hop character than American Strong Ales. Less chocolate and dark caramel than an American Brown Ale.',
          vitalStatistics: {
            OG: [1.045, 1.06],
            IBUs: [25, 40],
            FG: [1.01, 1.015],
            SRM: [10, 17],
            ABV: [4.5, 6.2],
          },
          commercialExamples:
            "Anderson Valley Boont Amber Ale, Bell's Amber Ale, Full Sail Amber, North Coast Red Seal Ale, Saint Arnold Amber Ale, Tröegs Hopback Amber Ale",
          tags: 'standard-strength, amber-color, top-fermented, north-america, craft-style, amber-ale-family, balanced, hoppy',
        },
      },
      {
        title: '19B. California Common',
        properties: {
          overallImpression:
            'A toasty and caramelly, fairly bitter, standard-strength beer with an interesting fruitiness and rustic, woody hop character. Smooth and well carbonated.',
          aroma:
            'Moderate to high herbal, resinous, floral, or minty hops. Light fruitiness acceptable. Low to moderate caramel or toasty malt supports the hops.',
          appearance:
            'Medium amber to light copper color. Generally clear. Moderate off-white head with good retention.',
          flavor:
            'Moderately malty with a pronounced hop bitterness. The malt character usually has toast (not roast) and caramel flavors. Low to moderately high hop flavor, usually showing rustic, traditional American hop qualities (often herbal, resinous, floral, minty). Finish fairly dry and crisp, with a lingering hop bitterness and a firm, grainy malt flavor. Light fruity esters are acceptable, but otherwise clean.',
          mouthfeel: 'Medium-bodied. Medium to medium-high carbonation.',
          comments:
            'This style is narrowly defined around the prototypical Anchor Steam example, although allowing other typical ingredients of the era. Northern Brewer hops are not a strict requirement for the style. Modern American and New World-type hops (especially citrusy ones) are inappropriate.',
          history:
            'American West Coast original, brewed originally as Steam Beer during the Gold Rush era. Large shallow open fermenters (coolships) were used to compensate for the lack of refrigeration and to take advantage of the cool temperatures in the San Francisco Bay area. Modern versions are based on Anchor Brewing re-launching the style in the 1970s.',
          characteristicIngredients:
            'Pale ale malt, non-citrusy hops (often Northern Brewer), small amounts of toasted malt or crystal malts. Lager yeast; however, some strains (often with the mention of "California" in the name) work better than others at the warmer fermentation temperatures (55 to 60 °F) typically used. Note that some German yeast strains produce inappropriate sulfury character.',
          styleComparison:
            'Superficially similar to an American Amber Ale, but with specific choices for malt and hopping - the hop flavor and aroma is traditional (not modern) American hops, malt flavors are toastier, the hopping is always assertive, and a warm-fermented lager yeast is used. Less attenuated, less carbonated and less fruity than Australian Sparkling ale.',
          vitalStatistics: {
            OG: [1.048, 1.054],
            IBUs: [30, 45],
            FG: [1.011, 1.014],
            SRM: [9, 14],
            ABV: [4.5, 5.5],
          },
          commercialExamples: 'Anchor Steam, Steamworks Steam Engine Lager',
          tags: 'standard-strength, amber-color, bottom-fermented, north-america, traditional-style, amber-lager-family, bitter, hoppy',
        },
      },
      {
        title: '19C. American Brown Ale',
        properties: {
          overallImpression:
            'A malty but hoppy standard-strength American ale frequently with chocolate and caramel flavors. The hop flavor and aroma complement and enhance the malt rather than clashing with it.',
          aroma:
            'Moderate malty-sweet to malty-rich aroma with chocolate, caramel, nutty, or toasty qualities. Hop aroma is typically low to moderate, of almost any type that complements the malt. Some interpretations of the style may optionally feature a stronger hop aroma, an American or New World hop character (citrusy, fruity, tropical, etc.), or a dry-hopped aroma. Fruity esters are moderate to very low. The dark malt character is more robust than other brown ales, yet stops short of being overly Porter-like.',
          appearance: 'Light to very dark brown color. Clear. Low to moderate off-white to light tan head.',
          flavor:
            'Medium to moderately-high malty-sweet or malty-rich flavor with chocolate, caramel, nutty, or toasty malt complexity, with medium to medium-high bitterness. Medium to medium-dry finish with an aftertaste of both malt and hops. Light to moderate hop flavor, sometimes citrusy, fruity, or tropical, although any hop flavor that complements the malt is acceptable. Very low to moderate fruity esters. The malt and hops are generally equal in intensity, but the balance can vary in either direction. Should not have a roasted character suggestive of a Porter or Stout.',
          mouthfeel:
            'Medium to medium-full body. More bitter versions may have a dry, resiny impression. Moderate to moderately-high carbonation. Stronger versions may be lightly warming.',
          comments:
            'Most commercial American Browns are not as aggressive as the original homebrewed versions, and some modern craft-brewed examples. This style reflects the current commercial offerings typically marketed as American Brown Ales rather than the hoppier, stronger homebrew versions from the early days of homebrewing. These IPA-strength brown ales should be entered as 21B Specialty IPA: Brown IPA.',
          history:
            "An American style from the early modern craft beer era. Derived from English Brown Ales, but with more hops. Pete's Wicked Ale (1986) defined the style, which was first judged at the Great American Beer Festival in 1992.",
          characteristicIngredients:
            'Pale malt, plus crystal and darker malts (typically chocolate). American hops are typical, but continental or New World hops can also be used.',
          styleComparison:
            'More chocolate and caramel flavors than American Pale or Amber Ales, typically with less prominent bitterness in the balance. Less bitterness, alcohol, and hop character than Brown IPAs. More bitter and generally hoppier than English Brown Ales, with a richer malt presence, usually higher alcohol, and American or New World hop character.',
          vitalStatistics: {
            OG: [1.045, 1.06],
            IBUs: [20, 30],
            FG: [1.01, 1.016],
            SRM: [18, 35],
            ABV: [4.3, 6.2],
          },
          commercialExamples:
            "Avery Ellie's Brown Ale, Big Sky Moose Drool Brown Ale, Brooklyn Brown Ale, Bell's Best Brown, Smuttynose Old Brown Dog Ale, Telluride Face Down Brown",
          tags: 'standard-strength, dark-color, top-fermented, north-america, craft-style, brown-ale-family, balanced, hoppy',
        },
      },
    ],
  },
  {
    title: '20. American Porter and Stout',
    description:
      'These beers all evolved from their English namesakes to be wholly transformed by American craft brewers. Generally, these styles are bigger, stronger, more roast-forward, and more hop-centric than their traditional Anglo cousins. These styles are grouped together due to a similar shared history and flavor profile.',
    styles: [
      {
        title: '20A. American Porter',
        properties: {
          overallImpression:
            'A malty, bitter, and often somewhat hoppy dark beer with a balanced, roasted, and frequently chocolatey character.',
          aroma:
            'Medium-light to medium-strong roast aroma, often with a chocolate, light coffee, or lightly burnt character, sometimes with a background caramel or toffee sweetness, or a malty richness. The resiny, earthy, or floral hop character can vary from low to high. Moderate fruity esters optional. Should not seem sharp, acrid, or acidic. The malt-hop balance can vary, but it should always have a roasted malt aroma.',
          appearance:
            'Medium brown to very dark brown, often with ruby- or garnet-like highlights. Can approach black in color. Clear, if not opaque. Full, tan-colored head with moderately good head retention.',
          flavor:
            'Moderately strong roasted flavor, often with a chocolate and lightly burnt character, sometimes with a sweet caramel or malty richness in support. Medium to high bitterness, and a dry to medium-sweet finish. Dark malts may sharpen this impression, but should not add an acrid, burnt, or harsh flavor. Low to high resiny, earthy, or floral hop flavor, which should not clash with the dark malt. Dry-hopped versions may have a fresh hop or resiny flavor. Moderate fruity esters optional. Should not have an acidic bite.',
          mouthfeel:
            'Medium to medium-full body. Moderately low to moderately high carbonation. Stronger versions may have a slight alcohol warmth. May have a slight dark malt astringency, but this character should not be strong.',
          comments:
            'Sometimes called Robust Porter, becoming increasingly hard to find. A rather broad style open to interpretation by the brewer. Dark malt intensity and flavor can vary significantly. May or may not have a strong hop character, or significant fermentation byproducts; thus may seem to have an "American" or "British" character.',
          history:
            'A stronger, more aggressive version of earlier Pre-Prohibition Porters or English Porters, first brewed in the modern craft beer era (introduced in 1974). This style describes the modern craft version; see Historical Beer: Pre-Prohibition Porter for the older US version.',
          characteristicIngredients:
            'Pale base malt, frequently crystal malt. Dark malts, often black malt or chocolate malt. American hops typically used for bittering, but US or UK finishing hops can be used. Ale yeast can either be clean US versions or characterful English varieties.',
          styleComparison:
            'More bitter and often stronger with more dark malt qualities and dryness than English Porters or Pre-Prohibition Porters. Less strong and assertive than American Stouts.',
          vitalStatistics: {
            OG: [1.05, 1.07],
            IBUs: [25, 50],
            FG: [1.012, 1.018],
            SRM: [22, 40],
            ABV: [4.8, 6.5],
          },
          commercialExamples:
            "Anchor Porter, Bell's Porter, Deschutes Black Butte Porter, Great Lakes Edmund Fitzgerald Porter, Sierra Nevada Porter, Smuttynose Robust Porter",
          tags: 'standard-strength, dark-color, top-fermented, north-america, craft-style, porter-family, bitter, roasty, hoppy',
        },
      },
      {
        title: '20B. American Stout',
        properties: {
          overallImpression:
            'A fairly strong, highly roasted, bitter, hoppy dark stout. The body and dark flavors typical of stouts with a more aggressive American hop character and bitterness.',
          aroma:
            'Moderate to strong roast aroma, often with a roasted coffee or dark chocolate quality. Burnt or charcoal aromas are acceptable at low levels. Medium to very low hop aroma, often with a citrusy or resiny character. Medium esters optional. Light alcohol optional. Should not seem sharp, acrid, or acidic.',
          appearance:
            'Generally a jet black color, although some may appear very dark brown. Large, persistent head of light tan to light brown in color. Usually opaque.',
          flavor:
            'Moderate to very high roasted flavors, often tasting of coffee, dark or bittersweet chocolate, or roasted coffee beans. May taste of slightly burnt coffee grounds, but this character should not be prominent. Low to medium malt sweetness, often with rich chocolate or caramel flavors. Medium to high bitterness. Low to high hop flavor, generally citrusy or resiny. Medium to dry finish, occasionally with a lightly burnt quality. Low esters optional. Light but smooth alcohol flavor optional.',
          mouthfeel:
            'Medium to full body. Can be somewhat creamy. Can have a bit of roast-derived astringency, but this character should not be excessive. Medium-high to high carbonation. Light to moderately strong alcohol warmth, but smooth and not excessively hot.',
          comments:
            'Breweries express individuality through varying the roasted malt profile, malt sweetness and flavor, and the amount of finishing hops used. Generally has bolder roasted malt flavors and hopping than other traditional stouts (except Imperial Stouts). Becoming increasingly hard to find.',
          history:
            'A modern craft beer and homebrew style that applied a more aggressive American hopping regime to a strong traditional English or Irish Stout. The homebrew version was once known as West Coast Stout, a common naming scheme for a more highly-hopped beer.',
          characteristicIngredients:
            'Common American base malts, yeast, and hops. Varied use of dark and roasted malts, as well as caramel-type malts. Adjuncts or additives may be present in low quantities to add complexity.',
          styleComparison:
            'Like a hoppy, bitter, strongly roasted Irish Extra Stout. Much more roast and body than a Black IPA. Bigger, stronger versions belong in the Imperial Stout style. Stronger and more assertive, particularly in the dark malt or grain additions and hop character, than American Porter.',
          vitalStatistics: {
            OG: [1.05, 1.075],
            IBUs: [35, 75],
            FG: [1.01, 1.022],
            SRM: [30, 40],
            ABV: [5, 7],
          },
          commercialExamples:
            "Avery Out of Bounds Stout, Bell's Kalamazoo Stout, Deschutes Obsidian Stout, Sierra Nevada Stout, Trillium Secret Stairs",
          tags: 'high-strength, dark-color, top-fermented, north-america, craft-style, stout-family, bitter, roasty, hoppy',
        },
      },
      {
        title: '20C. Imperial Stout',
        properties: {
          overallImpression:
            'An intensely-flavored, very strong, very dark stout with a broad range of interpretations. Roasty-burnt malt with a depth of dark or dried fruit flavors, and a warming, bittersweet finish. Despite the intense flavors, the components need to meld together to create a complex, harmonious beer, not a hot mess - sometimes only accomplished with age.',
          aroma:
            'Rich, deep, complex, and often quite intense, with a pleasant blend of roast, fruit, hops, and alcohol. Light to moderately strong roast can have a coffee, bittersweet or dark chocolate, cocoa, black licorice, tar, or slightly burnt grain quality, sometimes with a light caramel sweetness or toasty maltiness. Low to moderately strong esters often perceived as dark or dried fruits like plums, prunes, figs, black currants, or raisins. Very low to fairly aggressive hops, often English or American in character. Alcohol flavor optional, but should not be sharp, hot, or solventy. The balance between these main four components can vary greatly; not all need to be noticeable, but those present should have a smooth interplay. Age can add another dimension, including a vinous or port-like impression, but not sourness. Age can decrease aroma intensity.',
          appearance:
            'Color ranges from very dark reddish-brown to jet black. Opaque. Deep tan to dark brown head. Generally has a well-formed head, although head retention may be low to moderate. High alcohol and viscosity may be visible as legs.',
          flavor:
            'Like the aroma, a complex mix of roast, fruit, hops, and alcohol (same descriptors apply). The flavors can be quite intense, often greater than in the aroma, but the same warning about the balance varying greatly still applies. Medium to aggressively high bitterness. The maltiness balances and supports the other flavors, and may have qualities of bread, toast, or caramel. The palate and finish can be fairly dry to moderately sweet, an impression that often changes with age. Should not by syrupy or cloying. Aftertaste of roast, bitterness, and warmth. Same age effects as in the aroma apply.',
          mouthfeel:
            'Full to very full-bodied and chewy, with a velvety, luscious texture. The body and texture may decline with age. Gentle, smooth warmth should be present and noticeable, but as a background character. Low to moderate carbonation.',
          comments:
            "Sometimes known as Russian Imperial Stout or RIS. Varying interpretations exist with American versions having greater bitterness, and more roasted character and late hops, while English varieties often reflect a more complex specialty malt character with a more forward ester profile. Not all Imperial Stouts have a clearly 'English' or 'American' character; anything in between is allowable as well, which is why it is counter-productive to define strict sub-types. Judges must be aware of the broad range of the style, and not try to judge all examples as clones of a specific commercial beer.",
          history:
            'A style with a long, although not necessarily continuous, heritage. Traces roots to strong English porters brewed for export in the 1700s, and said to have been popular with the Russian Imperial Court. After the Napoleonic wars interrupted trade, these beers were increasingly sold in England. The style eventually all but died out, until being popularly embraced in the modern craft beer era in England as a revival export and in the United States as an adaptation by extending the style with American characteristics.',
          characteristicIngredients:
            'Pale malt with significant roasted malts or grain. Flaked adjuncts common. American or English ale yeast and hops are typical. Ages very well. Increasingly used as the base beer for many specialty styles.',
          styleComparison:
            'Darker and more roasty than Barleywines, but with similar alcohol. More complex, with a broader range of possible flavors, than lower-gravity stouts.',
          vitalStatistics: {
            OG: [1.075, 1.115],
            IBUs: [50, 90],
            FG: [1.018, 1.03],
            SRM: [30, 40],
            ABV: [8, 12],
          },
          commercialExamples:
            "American - Bell's Expedition Stout, Great Divide Yeti Imperial Stout, North Coast Old Rasputin Imperial Stout, Oskar Blues Ten Fidy, Sierra Nevada Narwhal Imperial Stout; English - 2SP Brewing Co The Russian, Courage Imperial Russian Stout, Le Coq Imperial Extra Double Stout, Samuel Smith Imperial Stout, Thornbridge Saint Petersburg",
          tags: 'very-high-strength, dark-color, top-fermented, british-isles, north-america, traditional-style, craft-style, stout-family, malty, bitter, roasty',
        },
        description:
          'Traditionally an English style, but it is currently much more popular and widely available in America and internationally, where it is a craft beer favorite, not a historical curiosity.\n',
      },
    ],
  },
  {
    title: '21. IPA',
    description:
      'The IPA category is for modern American IPAs and their derivatives. This does not imply that English IPAs aren\'t proper IPAs or that there isn\'t a relationship between them. This is simply a method of grouping similar styles for competition purposes. English IPAs are grouped with other English-derived beers, and the stronger Double IPA is grouped with stronger American beers. The term "IPA" is intentionally not spelled out as "India Pale Ale" since none of these beers historically went to India, and many aren\'t pale. However, the term IPA has come to be a balance-defined style in modern craft beer.',
    styles: [
      {
        title: '21A. American IPA',
        properties: {
          overallImpression:
            'A decidedly hoppy and bitter, moderately strong, pale American ale. The balance is hop-forward, with a clean fermentation profile, dryish finish, and clean, supporting malt allowing a creative range of hop character to shine through.',
          aroma:
            'A prominent to intense hop aroma often featuring American or New World hop characteristics, such as citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon. Low to medium-low clean, grainy maltiness supports the hop presentation. Generally clean fermentation profile, but light fruitiness acceptable. Restrained alcohol optional.',
          appearance:
            'Color ranging from medium gold to light reddish-amber. Clear, but light haze allowable. Medium-sized, white to off-white head with good persistence.',
          flavor:
            'Medium to very high hop flavor (same descriptors as aroma). Low to medium-low clean and grainy maltiness, possibly with light caramel and toast flavors. Medium-high to very high bitterness. Dry to medium-dry finish. Hoppy, bitter aftertaste with supportive malt. Low esters optional. Background clean alcohol flavor optional.',
          mouthfeel:
            'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harshness. Very light, smooth warmth optional.',
          comments:
            'The basis for many modern variations, including the stronger Double IPA as well as IPAs with various other ingredients. Those other IPAs should generally be entered in the 21B Specialty IPA style. An India Pale Lager (IPL) can be entered as an American IPA if it has a similar character, otherwise 34B Mixed-Style Beer. Oak is inappropriate in this style; if noticeably oaked, enter in 33A Wood-Aged Beer. Dry, sharply bitter, clear examples are sometimes known as West Coast IPA, which is really just a type of American IPA.',
          history:
            "The first modern American craft beer adaptation of this traditional English style is generally believed to be Anchor Liberty Ale, first brewed in 1975 and using whole Cascade hops; the style has evolved beyond that original beer, which now tastes more like an American Pale Ale in comparison. American-made IPAs from earlier eras were not unknown (particularly the well-regarded Ballantine's IPA, an oak-aged beer using an old English recipe). This style is based on the modern craft beer examples.",
          characteristicIngredients:
            'Pale base malt. American or English yeast with a clean or slightly fruity profile. Generally all-malt, but sugar additions are acceptable. Restrained use of crystal malts. Often uses American or New World hops but any varieties are acceptable; new hop varieties continue to be released and may be used even if they do not have the sensory profiles listed as examples.',
          styleComparison:
            'Stronger and more highly hopped than American Pale Ale. Compared to English IPA, has less caramel, bread, and toast; often more American or New World hops; fewer yeast-derived esters; less body and often a more hoppy balance; and is slightly stronger than most examples. Less alcohol than a Double IPA, but with a similar balance.',
          vitalStatistics: {
            OG: [1.056, 1.07],
            IBUs: [40, 70],
            FG: [1.008, 1.014],
            SRM: [6, 14],
            ABV: [5.5, 7.5],
          },
          commercialExamples:
            "Bell's Two-Hearted Ale, Cigar City Jai Alai, Fat Heads Head Hunter IPA, Firestone Walker Union Jack, Maine Lunch, Russian River Blind Pig IPA",
          tags: 'high-strength, pale-color, top-fermented, north-america, craft-style, ipa-family, bitter, hoppy',
        },
      },
      {
        title: 'Specialty IPA: Belgian IPA',
        properties: {
          overallImpression:
            'A dry, hoppy IPA with fruitiness and spiciness of Belgian yeast. Often lighter in color and more attenuated, similar to a Belgian Tripel that has been brewed with more hops.',
          aroma:
            'Moderate to high hop aroma, often reflecting the character of American or New World hops (tropical, melon, stone fruit, citrus, piney, etc.) or Continental hops (spicy, herbal, floral, etc.), possibly with a light dry-hop note. Gentle malt sweetness, sometimes with a sugary or honey character, but rarely caramel. Moderate to high esters, often pears, apples, citrus, or banana. Light spice, clove or pepper, optional. Light alcohol aroma optional.',
          appearance:
            'Light golden to amber in color. Moderate to large off-white head with good retention. Good to quite hazy clarity.',
          flavor:
            'Moderate fruity and spicy flavors, same descriptors as aroma. Moderate to high hop flavor, same descriptors as aroma. Light, relatively neutral grainy malt flavor, optionally with low toast, caramel, or honey. Moderate to high bitterness. Dry to medium-dry finish that often accentuates the perception of bitterness. Aftertaste has a lingering bitterness but is not harsh.',
          mouthfeel:
            'Light to medium body. Medium to high carbonation level, which can lighten the impression of body. Light warmth optional.',
          comments: 'The choice of yeast strain and hop varieties is critical since many choices will clash horribly.',
          history:
            'A relatively modern style, dating from the mid-2000s. Homebrewers and craft breweries substituted Belgian yeast in their American IPA recipes. Belgian breweries typically added more hops to their stronger pale beers.',
          characteristicIngredients:
            'Belgian yeast strains used in making Belgian Tripels and Golden Strong Ales. American examples tend to use American or New World hops while Belgian versions tend to use European hops and only pale malt. Sugar adjuncts common.',
          styleComparison:
            'A cross between an American IPA or Double IPA with a Belgian Golden Strong Ale or Belgian Tripel. This style is may be spicier, stronger, drier, and fruitier than an American IPA.',
          vitalStatistics: {
            OG: [1.058, 1.08],
            IBUs: [50, 100],
            FG: [1.008, 1.016],
            SRM: [5, 8],
            ABV: [6.2, 9.5],
          },
          commercialExamples: 'Brewery Vivant Triomphe, Green Flash Le Freak, Houblon Chouffe, Urthel Hop It',
          tags: 'high-strength, pale-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy',
        },
      },
      {
        title: 'Specialty IPA: Black IPA',
        properties: {
          overallImpression:
            'A beer with the dryness, hop-forward balance, and flavor characteristics of an American IPA, but darker in color. Darker malts add a gentle and supportive flavor, not a strongly roasted or burnt character.',
          aroma:
            'Moderate to high hop aroma, often with a stone fruit, tropical, citrusy, resinous, pine, berry, or melon character. Very low to moderate malt, possibly with light chocolate, coffee, or toast notes, as well as a background caramel sweetness. Clean fermentation profile, but light esters acceptable.',
          appearance:
            'Dark brown to black color. Clear, if not opaque. Light haze allowable, but should not be murky. Light tan to tan head, moderate size, persistent.',
          flavor:
            'Medium-low to high hop flavor, same descriptors as aroma. Low to medium malt flavor, with restrained chocolate or coffee notes, but not burnt or ashy. The roasted notes should not clash with the hops. Light caramel or toffee optional. Medium-high to very high bitterness. Dry to slightly off-dry finish, with a bitter but not harsh aftertaste, often with a light roast flavor that can contribute to the dry impression. Low to moderate esters optional. Background alcohol flavor optional.',
          mouthfeel:
            'Smooth. Medium-light to medium body. Medium carbonation. Light creaminess optional. Light warmth optional.',
          comments:
            'Most examples are standard strength. Strong examples can sometimes seem like big, hoppy porters if made too extreme, which hurts their drinkability.',
          history:
            'An American IPA variant first commercially produced by Greg Noonan as Blackwatch IPA around 1990. Popularized in the Pacific Northwest and Southern California of the US starting in the early-mid 2000s, and was a popular fad in the early 2010s before fading into obscurity in the US.',
          characteristicIngredients:
            'Debittered roast malts. Any American or New World hop character is acceptable; new hop varieties continue to be released and should not constrain this style to the example hop characteristics listed.',
          styleComparison:
            'Balance and overall impression of an American or Double IPA with restrained roast similar to the type found in Schwarzbier. Not as rich and roasty as American Stout and Porter, and with less body and increased smoothness and drinkability.',
          vitalStatistics: {
            OG: [1.05, 1.085],
            IBUs: [50, 90],
            FG: [1.01, 1.018],
            SRM: [25, 40],
            ABV: [5.5, 9],
          },
          commercialExamples:
            '21st Amendment Back in Black, Duck-Rabbit Hoppy Bunny ABA, Stone Sublimely Self-Righteous Black IPA',
          tags: 'high-strength, dark-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy',
        },
      },
      {
        title: 'Specialty IPA: Brown IPA',
        properties: {
          overallImpression:
            'Hoppy, bitter, and moderately strong like an American IPA, but with dark caramel, chocolate, toffee, or dark fruit character as in an American Brown Ale. Retaining the dryish finish and lean body that makes IPAs so drinkable, a Brown IPA is a little more flavorful and malty than an American IPA without being sweet or heavy.',
          aroma:
            'Moderate to moderately-high hop aroma, often with a stone fruit, tropical fruit, citrus, resin, pine, berry, or melon character. Medium-low to medium malty-sweet aroma mixes in well with the hop selection, and often features milk chocolate, cocoa, toffee, nuts, biscuits, dark caramel, toasted bread, or dark fruit character. Clean fermentation profile. Light esters optional. Light alcohol aroma optional.',
          appearance:
            'Color ranging from reddish-brown to dark brown but not black. Clear, if not opaque. Light haze optional. Medium-sized, cream-colored to tan head with good persistence.',
          flavor:
            'Medium to high hop flavor, same descriptors as aroma. Medium-low to medium clean, supportive malty flavor with same descriptors as aroma. The malt and hop choices should not produce flavor clashes. Medium-high to high bitterness, no harshness. Dry to medium finish, with a bitter, hoppy, and malty aftertaste. Low esters optional. Very low alcohol flavor optional. No highly roasted or burnt malt flavors. The malt should nearly balance the hop bitterness and flavor.',
          mouthfeel:
            'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harshness. Light warmth optional.',
          comments:
            'Separated from American Brown Ale to better differentiate stronger, highly hopped examples from more balanced, standard-strength beers.',
          history: 'See American Brown Ale.',
          characteristicIngredients:
            'Similar to an American IPA, but with medium or dark crystal malts, lightly roasted chocolate-type malts, or other intermediate color character malts. May use sugar adjuncts, including brown sugar. Any American or New World hop character is acceptable, but the hops and character malts should not clash.',
          styleComparison:
            'A stronger and more bitter version of an American Brown Ale, with the dry balance of an American IPA. Has less of a roasted flavor than Black IPA, but more chocolate flavors than a Red IPA.',
          vitalStatistics: {
            OG: [1.056, 1.07],
            IBUs: [40, 70],
            FG: [1.008, 1.016],
            SRM: [18, 35],
            ABV: [5.5, 7.5],
          },
          commercialExamples: "Dogfish Head Indian Brown Ale, Harpoon Brown IPA, Russian River Janet's Brown Ale",
          tags: 'high-strength, dark-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy',
        },
      },
      {
        title: 'Specialty IPA: Red IPA',
        properties: {
          overallImpression:
            'Hoppy, bitter, and moderately strong like an American IPA, but with some caramel, toffee, or fruit character as in an American Amber Ale. Retaining the dryish finish and lean body that makes IPAs so drinkable, a Red IPA is a little more flavorful and malty than an American IPA without being sweet or heavy.',
          aroma:
            'Moderate to strong hop aroma, often with a stone fruit, tropical fruit, citrus, resin, pine, berry, or melon character. Medium-low to medium malty-sweet aroma mixes in well with the hop selection, and often features medium to dark caramel, toffee, toasted bread, or dark fruit character. Clean fermentation profile. Light esters optional. Light alcohol aroma optional.',
          appearance:
            'Color ranging from light reddish-amber to dark reddish-copper. Clear. Light haze optional. Medium-sized, off-white to cream-colored head with good persistence.',
          flavor:
            'Medium to very high hop flavor, same descriptors as aroma. Medium-low to medium clean, supportive malty flavor with same descriptors as aroma. The malt and hop choices should not produce flavor clashes. Medium-high to very high bitterness, no harshness. Dry to medium finish, with a bitter, hoppy, and malty aftertaste. Low esters optional. Very low alcohol flavor optional. The malt should not overshadow the hop flavor and bitterness in the balance.',
          mouthfeel:
            'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harshness. Light warmth optional.',
          comments:
            'Separated from American Amber Ale to better differentiate stronger, highly hopped examples from more balanced, standard-strength beers.',
          history:
            'A modern American craft beer style, based on American IPA but with the malt flavors of an American Amber Ale. See American Amber Ale.',
          characteristicIngredients:
            'Similar to an American IPA, but with medium or dark crystal malts, possibly some character malts with a light toasty aspect. May use sugar adjuncts. Any American or New World hop character is acceptable, but the hops and character malts should not clash.',
          styleComparison:
            'A stronger, hoppier, more bitter version of American Amber Ale. Not as malty and sweet as an American Strong Ale. Drier, less alcohol, and not as malty as American Barleywine. Less chocolate and caramel than Brown IPA, but otherwise similar balance.',
          vitalStatistics: {
            OG: [1.056, 1.07],
            IBUs: [40, 70],
            FG: [1.008, 1.016],
            SRM: [11, 17],
            ABV: [5.5, 7.5],
          },
          commercialExamples:
            'Avery Hog Heaven, Cigar City Tocobaga Red IPA, Modern Times Blazing World, Tröegs Nugget Nectar',
          tags: 'high-strength, amber-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy',
        },
      },
      {
        title: 'Specialty IPA: Rye IPA',
        properties: {
          overallImpression:
            'An American IPA with spicy, grainy rye malt. The rye gives a bready and peppery flavor, a creamier body, and a dry, grainy finish.',
          aroma:
            'Prominent to intense hop aroma, often with a stone fruit, tropical fruit, citrus, resin, pine, berry, or melon character. Low peppery rye malt aroma, along with a clean, background grainy maltiness. Clean fermentation profile. Light esters optional. Light alcohol aroma optional.',
          appearance:
            'Color ranging from medium gold to light reddish-amber. Clear. Light haze optional. Medium-sized, white to off-white head with good persistence.',
          flavor:
            'Medium to very high hop flavor, same descriptors as aroma. Low to medium-low clean, supportive malt possibly with light caramel or toast flavors. Low to moderate grainy, peppery, spicy rye flavor that adds to the dry finish. Medium-high to very high bitterness, no harshness. Dry, bitter, hoppy aftertaste. Low esters optional. Background alcohol flavor optional.',
          mouthfeel:
            'Medium-light to medium body. Smooth texture, may be lightly creamy. Medium to medium-high carbonation. No harshness. Low warmth optional.',
          comments:
            'A modern American craft beer variation of American IPA. Rye malt character should be noticeable, otherwise enter in 21A American IPA.',
          history: 'A modern craft era variation of American IPA, popular among homebrewers.',
          characteristicIngredients:
            'Like an American IPA, with a generous portion of rye malt. Any American or New World hop is acceptable, but the hops and malt should not clash. No caraway. No oak.',
          styleComparison:
            'Drier, slightly spicier, and slightly creamier than an American IPA, with more of a lingering bitterness and spiciness in the finish. Does not have the intense rye malt or Weizen yeast character of a Roggenbier.',
          vitalStatistics: {
            OG: [1.056, 1.075],
            IBUs: [50, 75],
            FG: [1.008, 1.014],
            SRM: [6, 14],
            ABV: [5.5, 8],
          },
          commercialExamples: "Founders Red's Rye IPA, Sierra Nevada Ruthless Rye",
          tags: 'high-strength, amber-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy',
        },
      },
      {
        title: 'Specialty IPA: White IPA',
        properties: {
          overallImpression:
            'A fruity, spicy, refreshing version of an American IPA, but with a lighter color, less body, and featuring the distinctive yeast or spice additions typical of a Witbier.',
          aroma:
            'Moderate esters, often orange, grapefruit, apricot, or sometimes banana. Light spices optional, usually coriander, orange peel, pepper, or clove. Medium-low to medium hop aroma, often stone fruit, citrus, or tropical fruit. Esters and spices may reduce perception of hop aroma. Low neutral, grainy, or bready malt. Light alcohol aroma optional.',
          appearance: 'Pale to deep golden color. Typically hazy. Moderate to large, dense white head that persists.',
          flavor:
            'Moderate to high esters, medium-low to medium-high hop flavor, and light spices, all with the same descriptors as aroma. Light malt flavor, perhaps a bit bready. High bitterness. Moderately dry, refreshing finish. Background alcohol flavor optional.',
          mouthfeel:
            'Medium-light body. Medium to medium-high carbonation. Light spice astringency optional. Low warmth optional.',
          comments:
            'A craft beer interpretation of American IPA crossed with a Witbier. Spice impression may come from Belgian yeast, spice additions, or both.',
          history:
            'American craft brewers developed the style as a late winter or spring seasonal beer to appeal to Witbier and IPA drinkers alike.',
          characteristicIngredients:
            'Pale and wheat malts, Belgian Witbier yeast, citrusy American type hops. Coriander and orange peel optional.',
          styleComparison:
            'Bitter, hoppy, and stronger like an American IPA but fruity, spicy, and light like a Witbier. Typically late hops are not as prominent as in American IPA.',
          vitalStatistics: {
            OG: [1.056, 1.065],
            IBUs: [40, 70],
            FG: [1.01, 1.016],
            SRM: [5, 6],
            ABV: [5.5, 7],
          },
          commercialExamples: "Lagunitas A Little Sumpin' Sumpin' Ale, New Belgium Accumulation",
          tags: 'high-strength, pale-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy, spice',
        },
      },
      {
        title: 'Specialty IPA: Brut IPA',
        properties: {
          overallImpression:
            'A very pale, hop-forward American IPA variant with a bone-dry finish, very high carbonation, and a restrained bitterness level. Can be suggestive of a sparkling white wine or Champagne. The hop character is modern, and emphasizes flavor and aroma dimensions.',
          aroma:
            'Moderately high to intense hop aroma, very bright and hop-forward in the balance. Modern American and New World hop varieties provide a wide range of possible characteristics, such as tropical, stone fruit, citrusy, or white grape, but not grassy, vegetal, or herbal. Malt is subtle, neutral, and in the background, but never caramelly or overly corny-sweet. A light, clean alcohol note is optional. Very clean fermentation character; should not be yeasty.',
          appearance:
            'Very pale color, ranging from very pale straw to very light gold. Crystal clear but a touch of haze is acceptable. High to very high carbonation gives a massive, rocky, billowy, white head with tight, persistent bubbles.',
          flavor:
            'High to very high hop flavor, same descriptors as aroma. Low to very low neutral malt character, subtle in the balance. No strong malt flavors, no caramel. Perceived bitterness is low to very low due to the bone-dry finish and very high carbonation. Neutral to slightly fruity fermentation profile. No diacetyl. Dry to very dry finish with a fresh, hoppy aftertaste, and a clean bitterness.',
          mouthfeel:
            'Light to very light body with a spritzy carbonation (high to very high), reminiscent of a sparkling white wine. No bitter, harsh, hop-derived astringency. Alcohol warmth may be present but should never be hot.',
          comments:
            "Original concept was a sparkling wine-like IPA, although the hop character now varies more widely. Very low final gravity and high carbonation makes balance critical, often requiring a surprisingly low measured bitterness. 'Brut' is a wine term indicating dryness. Used incorrectly, added enzymes can cause diacetyl, which is always a flaw.",
          history:
            'A modern craft beer style originating in 2017 at the (now closed) Social Kitchen & Brewery in San Francisco as a west coast reaction to the rising trend of east coast hazy and juicy IPAs as well as thick and sweet so-called milkshake IPAs. The style is still evolving and changing (and perhaps dying, as the beer was quite faddish in 2018-2019 in the US). Most versions seem to be morphing into low-calorie IPAs.',
          characteristicIngredients:
            'Pilsner or very pale base malts with up to 40% adjuncts. No crystal malt or lactose. Enzymes, such as amyloglucosidase. Highly aromatic, oil-heavy, modern American or New World hops used in a variety of late-hopping or post-boil procedures to emphasize hop aroma and flavor and to minimize bitterness. Neutral yeast.',
          styleComparison:
            'Less malt flavor, bitterness, and color than an American IPA, and much drier and more highly carbonated. Dry-hopped like an American IPA. Similar aroma and flavor as a Hazy IPA but without sweetness and with much less haze. Very pale, highly carbonated, and dry like a Belgian Golden Strong Ale but not as strong and without Belgian yeast character.',
          vitalStatistics: {
            OG: [1.046, 1.057],
            IBUs: [20, 30],
            FG: [0.99, 1.004],
            SRM: [2, 4],
            ABV: [6, 7.5],
          },
          commercialExamples:
            "Drake's Brightside Extra Brut IPA, Fair State Brewing Co-Op The Brut Squad, Ommegang Brut IPA",
          tags: 'high-strength, pale-color, top-fermented, north-america, craft-style, ipa-family, specialty-family, bitter, hoppy',
        },
      },
      {
        title: '21C. Hazy IPA',
        properties: {
          overallImpression:
            'An American IPA with intense fruit flavors and aromas, a soft body, smooth mouthfeel, and often opaque with substantial haze. Less perceived bitterness than traditional IPAs but always massively hop-forward.',
          aroma:
            'Intense hop aroma, with stone fruit, tropical fruit, citrus, or other fruity qualities; not grassy or herbal. Clean, neutral, grainy, or lightly bready malt in the background; no caramel or toast. Absence of any malt character is a fault. Neutral to fruity fermentation character. Esters from yeast and hops should not clash. A creamy, buttery, or acidic aroma is inappropriate. Light alcohol aroma optional.',
          appearance:
            "Color ranging from straw to very light amber, sometimes with an orange hue. Hazy, often opaque, clarity; should not be cloudy or murky. The opacity can add a 'shine' to the beer and make the color seem darker. Any visible floating hop matter, yeast clumps, or other particulates is a fault. Medium to rocky, meringue-like white head with high to very high retention.",
          flavor:
            'High to very high fruity hop flavor, same descriptors as aroma. Low to medium malt flavor, same descriptors as aroma. Low to medium-high perceived bitterness, often masked by the fuller body and soft, off-dry to medium finish. The hop character in the aftertaste should not be sharp or harsh. Neutral to fruity fermentation profile, supportive of the hops. Should not be sweet, although high ester levels and lower bitterness may sometimes give that impression. Background alcohol flavor optional.',
          mouthfeel:
            'Medium to medium-full body. Medium carbonation. Smooth. No harshness. Light warmth optional. The beer should not have a creamy or viscous mouthfeel, an acidic twang, or a raw starch texture.',
          comments:
            "Also known as New England IPA or NEIPA. An emphasis on late hopping, especially dry-hopping, with hops with tropical fruit qualities lends the 'juicy' character for which this style is known.\nHeavy examples suggestive of milkshakes, creamsicles, or fruit smoothies are outside this style; IPAs should always be drinkable. Haziness comes from dry-hopping, not suspended yeast, starch haze, or other techniques; a hazy shine is desirable, not a cloudy, murky mess.",
          history:
            'A modern craft beer style originating in the New England region of the United States as an American IPA variant. Alchemist Heady Topper is believed to be the original inspiration as the style grew in popularity during the 2010s. The style continues to evolve, including a trend towards lower bitterness and using the style as the base for other additions.',
          characteristicIngredients:
            'Grist like an American IPA, but with more flaked grains and less caramel or specialty malts. American or New World hops with fruity characteristics. Neutral to estery yeast. Balanced to chloride-rich water. Heavily dry-hopped, partly during active fermentation, using a variety of hopping doses and temperatures to emphasis depth of hop aroma and flavor over bitterness. Biotransformation of hop oils during fermentation adds to the depth and fruit complexity.',
          styleComparison:
            'Has a fuller, softer mouthfeel, a more fruit-forward late hop expression, a more restrained perceived bitterness balance, and a hazier appearance than American IPA. Many modern American IPAs are fruity and somewhat hazy; examples with a dry, crisp finish, at most medium body, and high perceived bitterness should be entered as 21A American IPA. Noticeable additions of fruit, lactose, vanilla, etc. to increase the fruity, smooth character should be entered in a specialty category defined by the additives (e.g., 29A Fruit Beer, 29C Specialty Fruit Beer, 30D Specialty Spice Beer).',
          vitalStatistics: {
            OG: [1.06, 1.085],
            IBUs: [25, 60],
            FG: [1.01, 1.015],
            SRM: [3, 7],
            ABV: [6, 9],
          },
          commercialExamples:
            'Belching Beaver Hazers Gonna Haze, Hill Farmstead Susan, Other Half Green Diamonds Double IPA, Pinthouse Electric Jellyfish, Tree House Julius, Trillium Congress Street, WeldWerks Juicy Bits',
          tags: 'high-strength, pale-color, top-fermented, north-america, craft-style, ipa-family, bitter, hoppy',
        },
      },
    ],
  },
  {
    title: '22. Strong American Ale',
    description:
      'This category includes modern American strong ales with a varying balance of malt and hops. The category is defined mostly by higher alcohol strength and a lack of roast.',
    styles: [
      {
        title: '22A. Double IPA',
        properties: {
          overallImpression:
            'An intensely hoppy, fairly strong, bitter pale ale without the big, rich, complex maltiness, residual sweetness, and body of an American Barleywine. Strongly hopped, but clean, dry, and lacking harshness. Despite showing its strength, drinkability is an important consideration.',
          aroma:
            'A prominent to intense hop aroma typically featuring modern American or New World hop characteristics such as citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon. A supportive, clean, neutral to grainy maltiness may be found in the background. Neutral to lightly fruity fermentation profile. Alcohol may be noted, but should not be solventy.',
          appearance:
            'Gold to light orange-copper color, but most modern versions are fairly pale. Good clarity, although a little haze is acceptable. Moderate-sized, persistent, white to off-white head.',
          flavor:
            'Strong and complex hop flavor (same descriptors as aroma). Moderately high to very high bitterness, but should not be harsh. Low to medium supportive, clean, soft, unobtrusive malt character; may have light caramel or toast flavors. Dry to medium-dry finish, not sweet or heavy, with a lingering hoppy, bitter aftertaste. Low to moderate fruitiness optional. A light, clean, smooth alcohol flavor is allowable.',
          mouthfeel:
            'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harsh hop-derived astringency. Restrained, smooth alcohol warmth acceptable.',
          comments: 'Rarely called Imperial IPA. Many modern versions have multiple dry-hop additions.',
          history:
            'An American craft beer innovation first developed in the mid-late 1990s as more intense version of American IPA. Became more mainstream and popular throughout the 2000s, and inspired additional IPA creativity. Russian River Pliny the Elder, first brewed in 2000, helped popularize the style.',
          characteristicIngredients:
            'Neutral base malt. Sugar adjuncts common. Crystal malts rare. American or New World hops. Neutral or lightly fruity yeast. No oak.',
          styleComparison:
            'Bigger than English and American IPAs in alcohol strength, bitterness, and hoppiness. Less malty-rich, less body, drier, and with a greater overall hop balance than American Barleywine.',
          vitalStatistics: {
            OG: [1.065, 1.085],
            IBUs: [60, 100],
            FG: [1.008, 1.018],
            SRM: [6, 14],
            ABV: [7.5, 10],
          },
          commercialExamples:
            "Columbus Brewing Bohdi, Fat Head's Hop Juju, Port Brewing Hop-15, Russian River Pliny the Elder, Stone Ruination Double IPA 2.0, Wicked Weed Freak of Nature",
          tags: 'very-high-strength, pale-color, top-fermented, north-america, craft-style, ipa-family, bitter, hoppy',
        },
      },
      {
        title: '22B. American Strong Ale',
        properties: {
          overallImpression:
            'A malty, bitter, and strong American Ale fitting in the space between American Barleywine, Double IPA, and Red IPA. The malty and hoppy flavors can be quite strong, but are generally in balance.',
          aroma:
            'Medium to high hop aroma typically featuring modern American or New World hop characteristics such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, or melon. Moderate to bold maltiness supporting the hop profile, with medium to dark caramel common, toasty or bready possible, and background notes of light roast or chocolate allowable. Neutral to moderately fruity fermentation profile. Alcohol may be noted, but should not be solventy.',
          appearance:
            'Medium amber to deep copper or light brown. Moderate-low to medium-sized off-white to light tan head; may have low head retention. Good clarity. Legs possible.',
          flavor:
            'Medium to high malt, with a caramel, toffee, or dark fruit quality. Malt complexity can include additional toasty, bready, or rich flavors in support. Light chocolate or roast allowable, but should not be burnt or sharp. Medium-high to high bitterness. Moderate to high hop flavor, same descriptors as aroma. Low to moderate esters. May have a noticeable alcohol flavor, but should not be sharp. Medium to high malty sweetness on the palate, finishing somewhat dry to somewhat sweet. Should not be syrupy, sweet, or cloying. Bitter to bittersweet aftertaste, with hops, malt, and alcohol noticeable.',
          mouthfeel:
            'Medium to full body. An alcohol warmth may be present, but should not be excessively hot. Light hop astringency allowable. Medium-low to medium carbonation.',
          comments:
            "A fairly broad style describing beers labeled in various ways, including modern Double Red Ales and other strong, malty-but-hoppy beers that aren't quite in the Barleywine class. Diverse enough to include what may be viewed as a strong American Amber Ale with room for stronger versions of other American Ale styles.",
          history:
            'While modern craft versions were developed as "imperial" strength versions of American amber or red ales, the style has much in common with historic American Stock Ales. Strong, malty beers were highly hopped to keep as provision beers prior to Prohibition. There is no continuous legacy of brewing stock ales in this manner, but the resemblance is considerable (albeit without the age character).',
          characteristicIngredients:
            'Pale base malt. Medium to dark crystal malts common. American or New World hops. Neutral or lightly fruity yeast.',
          styleComparison:
            'Generally not as strong and as rich as an American Barleywine. More malt balanced than an American or Double IPA. More American hop intensity than a British Strong Ale. Maltier and fuller-bodied than a Red IPA.',
          vitalStatistics: {
            OG: [1.062, 1.09],
            IBUs: [50, 100],
            FG: [1.014, 1.024],
            SRM: [7, 18],
            ABV: [6.3, 10],
          },
          commercialExamples:
            "Arrogant Bastard Ale, Fat Head's Bone Head, Great Lakes Nosferatu, Oskar Blues G'Knight, Port Brewing Shark Attack Double Red Ale",
          tags: 'high-strength, amber-color, top-fermented, north-america, craft-style, strong-ale-family, bitter, hoppy',
        },
        description:
          "A grouping of beers with similar balance and profile rather than a distinct style. A category for a variety of stronger, bitter-and-malty beers that aren't quite Barleywines.\n",
      },
      {
        title: '22C. American Barleywine',
        properties: {
          overallImpression:
            'A very strong, malty, hoppy, bitter American ale with a rich palate, full mouthfeel, and warming aftertaste, suitable for contemplative sipping.',
          aroma:
            'Strong malt and hop aroma dominates. Hops are moderate to assertive, showing a range of American, New World, or English characteristics. Citrusy, fruity, or resiny are classic attributes, but others are possible, including those from modern hops. Strong grainy, bready, toasty, light caramel, or neutral malt richness, but typically not with darker caramel, roast, or deep fruit aspects. Low to moderately strong esters and alcohol, lower in the balance than the malt and hops. Intensities fade with age.',
          appearance:
            'Color ranges from amber to medium copper, rarely up to light brown. Ruby highlights common. Moderately-low to large off-white to light tan head; may have low head retention. Good to brilliant clarity but may have some chill haze. The color may appear to have great depth, as if viewed through a thick glass lens. Legs possible.',
          flavor:
            'Similar malt and hop flavors as the aroma (same descriptors apply). Moderately strong to aggressive bitterness, tempered by a rich, malty palate. Moderate to high hop flavor. Low to moderate esters. Noticeable alcohol, but not solventy. Moderately low to moderately high malty sweetness on the palate, with a somewhat malty to dry but full finish. Age will often dry out the beer, and smooth out the flavors. The balance is malty, but always bitter.',
          mouthfeel:
            "Full-bodied and chewy, with a velvety, luscious texture, declining with age. A smooth alcohol warmth should be noticeable, but shouldn't burn. Carbonation may be low to moderate, depending on age and conditioning.",
          comments:
            'Sometimes labeled as "Barley Wine" or "Barleywine-style ale". Recently many US breweries seem to have discontinued their Barleywines, made them barrel-aged, or rebranded them as some form of IPA.',
          history:
            'Traditionally the strongest ale offered by a brewery, often associated with the winter season and vintage-dated. As with many American craft beer styles, an adaptation of an English style using American ingredients and balance. One of the first American craft beer versions was Anchor Old Foghorn, first brewed in 1975. Sierra Nevada Bigfoot, first brewed in 1983, set the standard for the hop-forward style of today. The story goes that when Sierra Nevada first sent Bigfoot out for lab analysis, the lab called and said, "your Barleywine is too bitter" - to which Sierra Nevada replied, "thank you."',
          characteristicIngredients:
            'Pale malt with some specialty malts. Dark malts used with great restraint. Many varieties of hops can be used, but typically includes American hops. American or English ale yeast.',
          styleComparison:
            'Greater emphasis on hop bitterness, flavor, and aroma than English Barley Wine, often featuring American hop varieties. Typically paler than the darker English Barley Wines and lacking their deeper malt flavors, but darker than the golden English Barley Wines. Differs from a Double IPA in that the hops are not extreme, the malt is more forward, and the body is fuller and often richer. American Barleywine typically has more residual sweetness than Double IPA, which affects the overall drinkability (sipping vs. drinking).',
          vitalStatistics: {
            OG: [1.08, 1.12],
            IBUs: [50, 100],
            FG: [1.016, 1.03],
            SRM: [9, 18],
            ABV: [8, 12],
          },
          commercialExamples:
            "Anchor Old Foghorn, Bell's Third Coast Old Ale, East End Gratitude, Hair of the Dog Doggie Claws, Sierra Nevada Bigfoot",
          tags: 'very-high-strength, amber-color, top-fermented, north-america, craft-style, strong-ale-family, bitter, hoppy',
        },
      },
      {
        title: '22D. Wheatwine',
        properties: {
          overallImpression:
            'A richly textured, high alcohol sipping beer with a significant grainy, bready flavor, and a sleek body. The emphasis is first on the bready, wheaty flavors with malt, hops, fruity yeast, and alcohol complexity.',
          aroma:
            'Hop aroma is mild and can represent just about any hop variety. Moderate to moderately-strong bready, wheaty malt character, often with additional malt complexity such as honey and caramel. A light, clean, alcohol aroma may be noted. Low to medium fruity notes may be apparent. Very low diacetyl optional. Banana-and-clove Weizen yeast character is inappropriate.',
          appearance:
            'Color ranging from gold to deep amber, often with garnet or ruby highlights. Low to medium off-white head. The head may have creamy texture, and good retention. Chill haze is allowable, but usually clears up as the beer gets warmer. High alcohol and viscosity may be visible as legs.',
          flavor:
            'Moderate to moderately-high bready wheat malt flavor, dominant in the flavor balance over any hop character. Low to moderate toasty, caramel, biscuity, or honey malt notes can add a welcome complexity, but are not required. Low to medium hop flavor, reflecting any variety. Moderate to moderately-high fruitiness, often with a dried-fruit character. Low to moderate bitterness, creating a malty to even balance. Should not be syrupy or under-attenuated.',
          mouthfeel:
            'Medium-full to full body. Chewy, often with a luscious, velvety texture. Low to moderate carbonation. Light to moderate smooth alcohol warmth optional.',
          comments:
            'Much of the color arises from a lengthy boil. Some commercial examples may be stronger than the Vital Statistics.',
          history:
            'An American craft beer style that was first brewed at the Rubicon Brewing Company in 1988. Usually a winter seasonal, vintage, or one-off release.',
          characteristicIngredients:
            'Typically brewed with a combination of American two-row and American wheat. Style commonly uses 50% or more wheat malt. Restrained use of dark malts. Any variety of hops may be used. May be oak-aged.',
          styleComparison:
            'More than simply a wheat-based Barleywine, many versions have very expressive fruity and hoppy notes, while others develop complexity through oak aging. Less emphasis on the hops than American Barleywine. Has roots in American Wheat Beer rather than any German wheat style, so should not have any Weizen yeast character.',
          vitalStatistics: {
            OG: [1.08, 1.12],
            IBUs: [30, 60],
            FG: [1.016, 1.03],
            SRM: [6, 14],
            ABV: [8, 12],
          },
          commercialExamples:
            'The Bruery White Oak, Castelain Winter Ale, Perennial Heart of Gold, Two Brothers Bare Tree',
          tags: 'very-high-strength, amber-color, top-fermented, north-america, craft-style, strong-ale-family, wheat-beer-family, balanced, hoppy',
        },
      },
    ],
  },
  {
    title: '23. European Sour Ale',
    description:
      'This category contains the traditional sour beer styles of Europe that are still produced, many (but not all) with a wheat component. Most have low bitterness, with the sourness of the beer providing the balance that hop bitterness would otherwise contribute. Some are sweetened or flavored, whether at the brewery or upon consumption.',
    styles: [
      {
        title: '23A. Berliner Weisse',
        properties: {
          overallImpression:
            "A very pale, refreshing, low-alcohol German wheat beer with a clean lactic sourness and a very high carbonation level. A light bread dough malt flavor supports the sourness, which shouldn't seem artificial. A gentle fruitiness is found in the best examples.",
          aroma:
            'A moderate to moderately-high sharply sour character is dominant. Can have up to a moderately fruitiness, often lemon, tart apple, peach, or apricot, and a light floral note. No hop aroma. The wheat may be perceived as raw bread dough in fresher versions; combined with the acidity, may suggest sourdough bread.',
          appearance:
            'Straw in color, can be very pale. Clarity ranges from clear to somewhat hazy. Large, dense, white head with poor retention. Highly effervescent.',
          flavor:
            'Clean lactic sourness dominates and can be quite strong. A complementary doughy, bready, or grainy wheat flavor is generally noticeable. Hop bitterness is undetectable; sourness provides the balance rather than hops. Never vinegary. Bright yet restrained fruitiness may be detected as apricot-peach, citrus-lemon, or tart apple. Very dry finish. Balance dominated by sourness, but some malt flavor should be present. No hop flavor. No THP.',
          mouthfeel: 'Light body, but never thin. Very high carbonation. No sensation of alcohol. Crisp acidity.',
          comments:
            'Any Brett character is restrained, and is typically expressed as fruity and floral notes, not funky. Aged examples can show a cider, honey, hay, or gentle wildflower character, and sometimes increased acidity.\nIn Germany, it is classified as a Schankbier denoting a small beer of starting gravity in the range 7-8 °P. Fruited or Spiced versions should be entered as 29A Fruit Beer, as 30A Spice, Herb, or Vegetable Beer, or as 29B Fruit and Spice Beer.',
          history:
            'A regional specialty of Berlin. Referred to by Napoleon\'s troops in 1809 as "the Champagne of the North" due to its lively and elegant character. At one point, it was smoked and there used to be Märzen-strength (14 °P) version. Increasingly rare in Germany, but now produced in several other countries.',
          characteristicIngredients:
            'Pilsner malt. Usually wheat malt, often at least half the grist. A symbiotic co-fermentation with top-fermenting yeast and LAB provides the sharp sourness, which may be enhanced by blending of beers of different ages during fermentation and by cool aging. Decoction mashing with mash hopping is traditional. German brewing scientists believe that Brett is essential to get the correct, fruity-floral flavor profile.',
          styleComparison:
            'Compared to Lambic, has a clean lactic sourness with restrained to below sensory threshold Brett. Also lower in alcohol content. Compared to Straight Sour Beer and Catharina Sour, is lower gravity and may contain Brett.',
          vitalStatistics: {
            OG: [1.028, 1.032],
            IBUs: [3, 8],
            FG: [1.003, 1.006],
            SRM: [2, 3],
            ABV: [2.8, 3.8],
          },
          commercialExamples:
            "Bayerischer Bahnhof Berliner Style Weisse, Berliner Berg Berliner Weisse, Brauerei Meierei Weiße, Lemke Berlin Budike Weisse, Schell's Brewing Company Schelltheiss, Urban Chestnut Ku'damm",
          tags: 'session-strength, pale-color, top-fermented, central-europe, traditional-style, wheat-beer-family, sour',
        },
      },
      {
        title: '23B. Flanders Red Ale',
        properties: {
          overallImpression:
            'A sour and fruity oak-aged reddish-brown Belgian-style ale with supportive toasty malt flavors and fruit complexity. The dry, tannic finish supports the suggestion of a vintage red wine.',
          aroma:
            'Complex fruity-sour profile with supporting malt. Fruitiness is high, and reminiscent of black cherries, oranges, plums, red currants, or fruit leather. Low to medium-low vanilla, chocolate, or peppery phenol can be present for complexity. The sour aroma ranges from moderate to high. A dominant vinegary character is inappropriate, although low to moderate levels of acetic acid are acceptable if balanced with the malt. No hop aroma.',
          appearance:
            'Deep red, burgundy to reddish-brown in color. Good clarity. White to very pale tan head. Average to good head retention.',
          flavor:
            'Moderate to moderately-high malty flavors often have a soft toasty-rich quality. Intense fruit flavors, same descriptors as aroma. Complex, moderate to high sourness, accentuated by the esters; should not be a simple lactic sourness. A dominant vinegary character is inappropriate, although low to moderate acetic acid is acceptable if balanced with the malt. Generally as the sour character increases, the malt character fades to more of a background flavor (and vice versa). Low to medium-low vanilla, chocolate, or peppery phenols optional. No hop flavor. Restrained bitterness; balanced to the malt side. Acids and tannins can enhance the perception of bitterness, and provide balance and structure. Some versions are sweetened, or blended to be sweet; allow for a wide range of sweetness levels, which can soften the acidic bite and acetic perception.',
          mouthfeel:
            'Medium body, often enhanced by tannins. Low to medium carbonation. Low to medium astringency, often with a prickly acidity. Deceivingly light and crisp on the palate although a somewhat sweet finish is not uncommon.',
          comments:
            'The "wine-like" observation should not be taken too literally; it may suggest a high-acid French Burgundy to some, but it is clearly not identical. Produced by long aging (up to two years) in large wooden vats (foeders), blending of young and well-aged beer, and variable amounts of sweetening of the final product. A wide range of products are possible depending on the actual blend and whether any sweetening takes place. Acetic flavors may be noted, but not all acidity in this beer is from acetic acid; vinegar is over six times greater in total acidity than this style. Fruited versions should be entered as a 29A Fruit Beer.',
          history:
            'An indigenous beer of West Flanders, typified by the products of the Rodenbach brewery, established in 1821. Aging in wooden vats and blending of old and young beers borrowed from the English tradition. Belgian brewers consider Flanders Red and Oud Bruin to be of the same style family, but the distinction was first made when Michael Jackson first defined beer styles, since the flavor profiles are distinctly different. Many modern examples are influenced by the popularity of Rodenbach Grand Cru.',
          characteristicIngredients:
            'Vienna or Munich malts, a variety of caramel malts, maize. Low alpha acid continental hops. Sacch, Lacto, and Brett. Aged in oak. Sometimes blended and sweetened (natural or artificial).',
          styleComparison: 'Less malty-rich than an Oud Bruin, often with more of a fruity-tart and acetic profile.',
          vitalStatistics: {
            OG: [1.048, 1.057],
            IBUs: [10, 25],
            FG: [1.002, 1.012],
            SRM: [10, 17],
            ABV: [4.6, 6.5],
          },
          commercialExamples:
            'Cuvée des Jacobins, Duchesse de Bourgogne, New Belgium La Folie, Rodenbach Classic, Rodenbach Grand Cru, Vichtenaar Flemish Ale',
          tags: 'standard-strength, amber-color, top-fermented, western-europe, traditional-style, balanced, sour, wood',
        },
      },
      {
        title: '23C. Oud Bruin',
        properties: {
          overallImpression:
            'A malty, fruity, aged, somewhat sour Belgian-style brown ale with a caramel-chocolate malt flavor, and often substantial alcohol.',
          aroma:
            'Richly malty with fruity esters and an aged sourness. Medium to medium-high esters commonly reminiscent of raisins, plums, figs, dates, oranges, black cherries, or prunes. Medium-low to medium-high malt with caramel, toffee, treacle, or chocolate character. Low spicy-peppery phenols optional. A low sour aroma may be present, and can modestly increase with age but should not grow to a strongly acetic, vinegary character. Hop aroma absent. Aged examples can show a lightly nutty, sherry-like oxidation character.',
          appearance:
            'Dark reddish-brown to brown in color. Good clarity. Average to good head retention. Ivory to light tan head color.',
          flavor:
            'Malty with fruity complexity and typically some dark caramel or burnt sugar flavor. Medium-low to medium-high malt, same descriptors as aroma. Medium to medium-high fruitiness, same descriptors as aroma. Low spicy-peppery phenols optional. A slight sourness often becomes more pronounced in well-aged examples, along with some sherry-like character, producing a "sweet-and-sour" profile and aftertaste. The sourness should not grow to a strongly acetic, vinegary character. Hop flavor absent. Restrained hop bitterness. Balance is malty, but with fruitiness and sourness present. Blending and sweetening may produce a range of finishes, and balances.',
          mouthfeel:
            'Medium to medium-full body. Low to moderate carbonation. No astringency. Stronger versions can be noticeably warming.',
          comments:
            'Long aging and blending of young and aged beer may occur, adding smoothness and complexity and balancing any harsh, sour character. Traditionally, this style was designed to lay down so examples with a moderate aged character are considered superior to younger examples. Fruited versions should be entered as a 29A Fruit Beer.',
          history:
            'An indigenous beer of East Flanders, typified by the products of the Liefman brewery with roots back to the 1600s. Belgian brewers consider Flanders Red and Oud Bruin to be of the same style family, but the distinction was first made when Michael Jackson first defined beer styles, since the flavor profiles are distinctly different. Many modern examples are influenced by the popularity of Liefmans Goudenband. Unrelated to the dark, sweet Dutch lager of the same name.',
          characteristicIngredients:
            'Pils malt, dark crystal malts, maize, small amounts of color malt. Low alpha acid continental hops. Sacch and Lacto. Aged. Water with carbonates and magnesium typical of its home region.',
          styleComparison:
            "A deeper malt character with more caramel, toffee, and chocolate flavors and darker color distinguishes these beers from Flanders Red Ale. The Oud Bruin is less acetic and maltier than a Flanders Red, and the fruity flavors are more malt-oriented. In modern times, Oud Bruin also tends to be higher in alcohol than is typically seen in Flanders Red Ales. Differs from Lambic in that they are not spontaneously fermented, and don't contain wheat.",
          vitalStatistics: {
            OG: [1.04, 1.074],
            IBUs: [20, 25],
            FG: [1.008, 1.012],
            SRM: [17, 22],
            ABV: [4, 8],
          },
          commercialExamples:
            'Ichtegem Oud Bruin, Liefmans Goudenband, Liefmans Oud Bruin, Petrus Roodbruin, pFriem Oud Bruin, VanderGhinste Roodbruin',
          tags: 'standard-strength, dark-color, top-fermented, western-europe, traditional-style, malty, sour',
        },
      },
      {
        title: '23D. Lambic',
        properties: {
          overallImpression:
            'A fairly sour, often moderately funky, wild Belgian wheat beer with sourness taking the place of hop bitterness in the balance. Traditionally served uncarbonated as a café drink.',
          aroma:
            'Young versions can be quite sour and fruity, but can develop barnyard, earthy, goaty, hay, horsey, or horse blanket funkiness with age. The fruit character can take on a light citrus fruit, citrus rind, pome fruit, or rhubarb quality, getting more complex with age. Malt can have a light bready, grainy, honey, or wheat-like quality, if noticeable. Should not have enteric, smoky, cigar-like, or cheesy faults. No hops.',
          appearance:
            'Pale yellow to deep golden in color; age tends to darken the beer. Clarity is hazy to good. Younger versions are often cloudy, while older ones are generally clear. White colored head generally has poor retention.',
          flavor:
            'Young versions often have a strong lactic sourness with fruity flavors (same descriptors as aroma), while aged versions are more balanced and complex. Funky notes can develop over time, same descriptors as aroma. Low bready, grainy malt. Bitterness generally below sensory threshold; sourness provides the balance. No hop flavor. Dry finish, increasing with age. Should not have enteric, smoky, cigar-like, or cheesy faults.',
          mouthfeel:
            'Light to medium-light body; should not be watery. Has a medium to high tart, puckering quality without being sharply astringent. Traditional versions are virtually to completely uncarbonated, but bottled examples can pick up moderate carbonation with age.',
          comments:
            'A single-batch, unblended beer, reflecting the house character of the brewery. Generally served young (6 months) from the cask. Younger versions tend to be one-dimensionally sour since a complex Brett character takes a year or more to develop. A noticeable vinegary or cidery character is considered a fault by Belgian brewers. Typically bottled only when completely fermented. Lambic sweetened with raw sugar at service time is known as Faro.',
          history:
            "Spontaneously-fermented 'wild' ales from the area in and around Brussels (also known as the Senne Valley and the Pajottenland) stem from a farmhouse brewing tradition several centuries old.",
          characteristicIngredients:
            'Pilsner malt, unmalted wheat. Aged hops (3+ years) used more as a preservative than for bitterness. Spontaneously fermented with naturally occurring yeast and bacteria in well-used, neutral oak barrels.',
          styleComparison:
            'Often has a simpler sourness and less complexity than a Gueuze, but more variability from batch to batch. Traditionally served uncarbonated from pitchers, while Gueuze is bottled and very highly carbonated.',
          vitalStatistics: {
            OG: [1.04, 1.054],
            IBUs: [0, 10],
            FG: [1.001, 1.01],
            SRM: [3, 6],
            ABV: [5, 6.5],
          },
          commercialExamples:
            'Cantillon Grand Cru Bruocsella. In the Brussels area, many specialty cafés have draught lambic from Boon, De Cam, Cantillon, Drie Fonteinen, Lindemans, Timmermans, Girardin and others.',
          tags: 'standard-strength, pale-color, wild-fermented, western-europe, traditional-style, wheat-beer-family, sour',
        },
      },
      {
        title: '23E. Gueuze',
        properties: {
          overallImpression:
            'A very refreshing, highly carbonated, pleasantly sour but balanced wild Belgian wheat beer. The wild beer character can be complex and varied, combining sour, funky, and fruity flavors.',
          aroma:
            'Moderately sour with complex but balanced funkiness accented by fruity notes. The funkiness can be moderate to strong, and can be described as barnyard, leather, earthy, goaty, hay, horsey, or horse blanket. Fruitiness is light to moderate, with a citrus fruit, citrus rind, pome fruit, or rhubarb quality. Malt is supportive, and can be lightly bready, grainy, honey, or wheat-like, if noticeable. Should not have enteric, smoky, cigar-like, or cheesy faults. No hops. Light oak acceptable. Complexity of aroma is valued more than intensity, but a balanced sour presentation is desirable.',
          appearance:
            'Golden color, with excellent clarity and a thick, rocky, mousse-like, white head that seems to last forever. Effervescent.',
          flavor:
            'Sour and funky on the palate, with a similar character as the aroma (same descriptors and intensities apply for funk and fruit). Low bready, grainy malt. Bitterness low to none; sourness provides most of the balance. No hop flavor. Crisp, dry finish, with a tart and funky aftertaste. Light oak, vanilla, and honey are acceptable. Should not have enteric, smoky, cigar-like, or cheesy faults. The beer should not be one dimensionally sour; a balanced, moderately sour presentation is classic, with the funky and fruity notes providing complexity. May be aged.',
          mouthfeel:
            'Light to medium-light body; should not be watery. Has a low to high tart, puckering quality without being sharply astringent. Some versions have a very light warming character. Highly carbonated.',
          comments:
            'Blending young and aged lambic creates a more complex product, and often reflects the personal taste of the blender. A noticeable vinegary or cidery character is considered a fault by Belgian brewers. A good Gueuze is not the most pungent, but possesses a full and tantalizing bouquet, a sharp aroma, and a soft, velvety texture. Lambic is served uncarbonated, while Gueuze is served sparkling. Products marked oude or vieille ("old") are considered most traditional.',
          history:
            'Same basic history as Lambic, but involves blending, which may be performed outside the brewery. Some of the best examples are produced by blenders, who ferment, age, blend, and package the final product. Some modern producers are sweetening their products post-fermentation to make them more palatable to a wider audience. These guidelines describe the traditional dry product.',
          characteristicIngredients:
            'Same as Lambic, except that one-, two-, and three-year old Lambics are blended, then cellared.',
          styleComparison:
            "More complex and carbonated than a Lambic. The sourness isn't necessarily stronger, but it tends to have more of a well-developed wild character.",
          vitalStatistics: {
            OG: [1.04, 1.054],
            IBUs: [0, 10],
            FG: [1, 1.006],
            SRM: [5, 6],
            ABV: [5, 8],
          },
          commercialExamples:
            '3 Fonteinen Oud Gueuze, Cantillon Classic Gueuze 100% Lambic, Girardin Gueuze 1882 (Black label), Hanssens Oude Gueuze, Lindemans Gueuze Cuvée René, Oude Gueuze Boon',
          tags: 'high-strength, pale-color, wild-fermented, western-europe, traditional-style, wheat-beer-family, aged, sour',
        },
      },
      {
        title: '23F. Fruit Lambic',
        properties: {
          overallImpression:
            'A complex, refreshing, pleasantly sour Belgian wheat beer blending a complementary fermented fruit character with a sour, funky Gueuze.',
          aroma:
            'The specified fruit should be the dominant aroma, blending well with similar aromatics as Gueuze (same description applies, but with the addition of a fermented fruit character).',
          appearance:
            'Like Gueuze, but modified by the color of the fruit used, fading in intensity with age. Clarity is often good, although some fruit will not drop bright. If highly carbonated in the traditional manner, will have a thick rocky, generally long-lasting, mousse-like head, sometimes with a hue reflecting the added fruit.',
          flavor:
            'Combines the flavor profile of a Gueuze (same description applies) with noticeable flavor contributions from the added fruit. Traditional versions are dry and tart, with an added fermented fruit flavor. Modern versions may have a variable sweetness, which can offset the acidity. Fruit flavors also fade with age, and lose their vibrancy, so can be low to high in intensity.',
          mouthfeel:
            'Light to medium-light body; should not be watery. Has a low to high tart, puckering quality without being sharply astringent. Some versions have a light warming character. Carbonation can vary from sparkling to nearly still.',
          comments:
            'Produced like Gueuze, with the fruit commonly added halfway through aging, so the yeast and bacteria can ferment all sugars from the fruit; or less commonly by adding fruit to a Lambic. The variety of fruit can sometimes be hard to identify since fermented and aged fruit is often perceived differently than the more recognizable fresh fruit. Fruit can bring acidity and tannins, in addition to flavor and aroma; understanding the fermented character of added fruit helps with judging the style.',
          history:
            'Same basic history as Gueuze, including the recent sweetening trend but with fruit in addition to sugar. Fruit was traditionally added by the blender or publican to increase the variety of beers available in local cafés.',
          characteristicIngredients:
            'Same base as Gueuze. Fruit added to barrels during fermentation and blending. Traditional fruit include tart cherries, raspberries; modern fruit include peaches, apricots, grapes, and others. May use natural or artificial sweeteners.',
          styleComparison: 'A Gueuze with fruit, not just a sour Fruit Beer; the wild character must be evident.',
          entryInstructions:
            'The type of fruit used must be specified. The brewer must declare a carbonation level (low, medium, high) and a sweetness level (low/none, medium, high).',
          vitalStatistics: {
            OG: [1.04, 1.06],
            IBUs: [0, 10],
            FG: [1, 1.01],
            SRM: [3, 7],
            ABV: [5.0, 7.0],
          },
          commercialExamples:
            "3 Fonteinen Schaerbeekse Kriek, Cantillon Fou' Foune, Cantillon Lou Pepe Framboise, Cantillon Vigneronne, Hanssens Oude Kriek, Oude Kriek Boon",
          tags: 'standard-strength, pale-color, wild-fermented, western-europe, traditional-style, wheat-beer-family, sour, fruit',
        },
      },
      {
        title: '23G. Gose',
        properties: {
          overallImpression:
            'A tart, lightly-bittered historical central European wheat beer with a distinctive but restrained salt and coriander character. Very refreshing, with a dry finish, high carbonation, and bright flavors.',
          aroma:
            'Light to moderately fruity aroma of pome fruit. Light sourness, slightly sharp. Noticeable coriander, which can have an aromatic lemony quality, and an intensity up to moderate. Light bready, doughy, yeasty character like uncooked sourdough bread. The acidity and coriander can give a bright, lively impression. The salt may be perceived as a very light, clean sea breeze character or just a general freshness, if noticeable at all.',
          appearance:
            'Unfiltered, with a moderate to full haze. Moderate to tall white head with tight bubbles and good retention. Effervescent. Yellow color.',
          flavor:
            'Noticeable sourness, medium-low to medium-high. Moderate bready or doughy malt flavor. Light to moderate fruity character of pome fruit, stone fruit, or lemons. Light to moderate salt character, up to the threshold of taste; the salt should be noticeable (particularly in the initial taste) but not taste overtly salty. Very low bitterness. No hop flavor. Dry, fully-attenuated finish, with acidity not hops balancing the malt. Acidity can be more noticeable in the finish, and enhance the refreshing quality of the beer. The acidity should be balanced, not forward (although historical versions could be very sour). No THP.',
          mouthfeel:
            "High to very high carbonation. Effervescent. Medium-light to medium-full body. Salt may give a slightly tingly, mouthwatering quality and a rounder, thicker mouthfeel. Yeast and wheat can also add a little body, but shouldn't feel heavy due to the thinning effects of acidity.",
          comments:
            "Historical versions may have been more sour than modern examples due to spontaneous fermentation, and may be blended with syrups as is done with Berliner Weisse, or with caraway liqueur. Modern examples are inoculated with Lacto, and are more balanced and generally don't need sweetening. Pronounced GOH-zeh.",
          history:
            'Minor style associated with Leipzig but originating in the Middle Ages in the town of Goslar on the Gose River. Documented to have been in Leipzig by 1740. Leipzig was said to have 80 Gose houses in 1900. Production declined significantly after WWII, and ceased entirely in 1966. Modern production was revived in the 1980s in Germany, but the beer was not widely available. Became popular outside of Germany recently as a revival style, and is often used as a base style for fruited sour beers and other Specialty-Type beers.',
          characteristicIngredients:
            'Pilsner and wheat malt, restrained use of salt and coriander seed, Lacto. The coriander should have a fresh, citrusy (lemon or bitter orange), bright note, and not be vegetal, celery-like, or ham-like. The salt should have a sea salt or fresh salt character, not a metallic, iodine note.',
          styleComparison:
            'Perceived acidity is not as intense as Berliner Weisse or Gueuze. Restrained use of salt, coriander, and Lacto - should not taste overtly salty. Coriander aroma can be similar to a Witbier. Haziness similar to a Weissbier.',
          vitalStatistics: {
            OG: [1.036, 1.056],
            IBUs: [5, 12],
            FG: [1.006, 1.01],
            SRM: [3, 4],
            ABV: [4.2, 4.8],
          },
          commercialExamples:
            'Anderson Valley Gose, Bayerisch Bahnhof Leipziger Gose, Original Ritterguts Gose, Westbrook Gose',
          tags: 'standard-strength, pale-color, top-fermented, central-europe, historical-style, wheat-beer-family, sour, spice',
        },
      },
    ],
  },
  {
    title: '24. Belgian Ale',
    description: 'This category contains the maltier to balanced, more highly flavored Belgian and French ales.',
    styles: [
      {
        title: '24A. Witbier',
        properties: {
          overallImpression:
            'A pale, hazy Belgian wheat beer with spices accentuating the yeast character. A delicate, lightly spiced, moderate-strength ale that is a refreshing summer drink with its high carbonation, dry finish, and light hopping.',
          aroma:
            'Moderate bready maltiness, often with light notes of honey or vanilla. Light grainy, spicy wheat aromatics. Moderate perfumy-lemony coriander, often with a complex herbal, spicy, or peppery note in the background. Moderate zesty, citrusy-orangey fruitiness. A low spicy-herbal hop aroma is optional, but typically absent. Spices should blend in with fruity, floral, and sweet aromas and should not be overly strong.',
          appearance:
            'Very pale straw to deep yellow in color. The beer will be very cloudy from starch haze or yeast, which gives it a milky, whitish-yellow shine. Dense, white, moussy head. Head retention should be quite good.',
          flavor:
            'Pleasant bready, grainy malt flavor, often with a honey or vanilla character. Moderate zesty, orange-citrusy fruitiness. Herbal-spicy flavors, which may include lemony coriander and other spices, are common should be subtle and balanced, not overpowering. A spicy-earthy hop flavor can be low to none, and never overshadows the spices. Hop bitterness is low to medium-low, and supports the refreshing flavors of fruit and spice. Refreshingly crisp with a dry finish, and no bitter or harsh aftertaste.',
          mouthfeel:
            'Medium-light to medium body, often having a smoothness and light creaminess. Effervescent character from high carbonation. Refreshing, from carbonation, dryness, and lack of bitterness in finish. No harshness or astringency. Should not be overly dry and thin, nor should it be thick and heavy.',
          comments:
            'Historical versions may have had some lactic sourness but this is absent in fresh modern versions. Spicing has some variety, but should not be overdone. Coriander of certain origin or age might give an inappropriate ham or celery character. The beer tends to be perishable, so younger, fresher, properly-handled examples are most desirable. An impression of sweetness is often due to low bitterness, not residual sugar. Most examples seem to be approximately 5% ABV.',
          history:
            'One of a group of medieval Belgian white beers from the Leuven area, it died out in 1957 and was later revived in 1966 by Pierre Celis at what became Hoegaarden. After Hoegaarden was acquired by Interbrew, the style grew rapidly and inspired many similar products that are traceable to the Celis recreation of the style, not those from past centuries.',
          characteristicIngredients:
            'Unmalted wheat (30-60%), the remainder low color barley malt. Some versions use up to 5-10% raw oats or other unmalted cereal grains. Traditionally uses coriander seed and dried Curaçao orange peel. Other secret spices are rumored to be used in some versions, as are sweet orange peels. Mild fruity-spicy Belgian ale yeast.',
          styleComparison:
            'Low bitterness level with a balance similar to a Weissbier, but with spice and citrus character coming from additions more so than the yeast.',
          vitalStatistics: {
            OG: [1.044, 1.052],
            IBUs: [8, 20],
            FG: [1.008, 1.012],
            SRM: [2, 4],
            ABV: [4.5, 5.5],
          },
          commercialExamples: 'Allagash White, Blanche de Bruxelles, Celis White, Hoegaarden White, Ommegang Witte, ',
          tags: 'standard-strength, pale-color, top-fermented, western-europe, traditional-style, wheat-beer-family, spice',
        },
      },
      {
        title: '24B. Belgian Pale Ale',
        properties: {
          overallImpression:
            'A top-fermented, all malt, average strength Belgian ale that is moderately bitter, not dry-hopped, and without strong flavors. The copper-colored beer lacks the aggressive yeast character or sourness of many Belgian beers, but has a well-balanced, malty, fruity, and often bready and toasty profile.',
          aroma:
            'Moderate bready malt aroma, which can include toasty, biscuity, or nutty notes, possibly with a touch of light caramel or honey. Moderate to moderately high fruitiness complements the malt, and is suggestive of pear, orange, apple, or lemon, and sometimes of darker stone fruit like plums. Low to moderate spicy, herbal, or floral hop character. Low peppery, spicy phenols optional. The hop character is lower in balance than the malt and fruitiness.',
          appearance: 'Amber to copper in color. Clarity is very good. Creamy, rocky, white head. Well carbonated.',
          flavor:
            'Has an initial soft, smooth, moderately malty flavor with a variable profile of toasty, biscuity, nutty, light caramel, or honey notes. Moderate to moderately high fruitiness, with a pear, orange, apple, or lemon character. Medium-low to low spicy, herbal, or floral hop character. Medium-high to medium-low bitterness, enhanced by optional low to very low peppery phenols. Dry to balanced finish, with hops becoming more pronounced in the aftertaste of those with a drier finish. Fairly well balanced overall, with no single component being high in intensity; malt and fruitiness are more forward initially with a supportive bitterness and drying character coming on late.',
          mouthfeel:
            'Medium to medium-light body. Smooth palate. Alcohol level is restrained, and any warming character should be low if present. Medium to medium-high carbonation.',
          comments:
            'Most commonly found in the Flemish provinces of Antwerp, Brabant, Hainaut, and East Flanders. A Spéciale Belge Ale (Belgian Special Ale) in Belgium.',
          history:
            'Created after a competition in 1904 to create a regional specialty beer to compete with imported British ales and continental lagers. De Koninck of Antwerp is the best-known modern example, making the beer since 1913.',
          characteristicIngredients:
            'Variable grist with pale, character, and caramel malts. No adjuncts. English or continental hops. Fruity yeast with low phenols.',
          styleComparison:
            'Fairly similar to pale ales from England (11C Strong Bitter), typically with a slightly different yeast character and a more varied malt profile. Less yeast character than many other Belgian beers, though.',
          vitalStatistics: {
            OG: [1.048, 1.054],
            IBUs: [20, 30],
            FG: [1.01, 1.014],
            SRM: [8, 14],
            ABV: [4.8, 5.5],
          },
          commercialExamples: 'De Koninck Bolleke, De Ryck Special, Palm, Palm Dobble',
          tags: 'standard-strength, amber-color, top-fermented, western-europe, traditional-style, pale-ale-family, balanced',
        },
      },
      {
        title: '24C. Bière de Garde',
        properties: {
          overallImpression:
            'A family of smooth, fairly strong, malty, lagered artisanal French beer with a range of malt flavors appropriate for the blond, amber, or brown color. All are malty yet dry, with clean flavors. Darker versions have more malt character, while paler versions can have more hops while still remaining malt-focused beers.',
          aroma:
            'Prominent malty richness, often with a complex, light-to-moderate intensity, toasty and bready character. Low to moderate esters. Low spicy, peppery, or herbal hops optional. Generally quite clean, although stronger versions may have a light, spicy alcohol note as it warms.\nPaler versions are still malty but lack richer, deeper aromatics and may have a bit more hops.',
          appearance:
            'Blond, amber, and brown variations exist, with the color varying accordingly: golden-blonde to reddish-bronze to chestnut brown. Clarity is brilliant to fair, but some haze is allowable. Well-formed head, generally white to off-white (varying with beer color), average persistence.',
          flavor:
            'Medium to high malty richness, often with a toasty, biscuity, toffee, or light caramel character. Low to moderate esters and alcohol flavors. Medium-low hop bitterness, giving a malty balance to the palate and aftertaste. Medium-dry to dry finish, not sweet, cloying, or heavy. Low spicy, peppery, or herbal hop flavor optional.\nMalt flavor, depth, richness, intensity, and complexity increases with beer color. Darker versions will have more of an initial rich malty impression than paler versions but should not seem roasted. Paler versions can have slightly greater hop flavor.',
          mouthfeel:
            'Medium to medium-light body, often with a smooth, creamy-silky character. Moderate to high carbonation. Moderate alcohol warming, but should never be hot.',
          comments:
            'Cellar, musty, moldy, or rustic character often mentioned in literature are signs of mishandled imports, not fresh, authentic products. Age and oxidation can also increase fruitiness and caramel flavors, but increase harshness. While caramel and fruit can be part of the style, do not confuse the oxidation character for the proper base beer.',
          history:
            'Name roughly means beer for keeping. A traditional farmhouse artisanal ale from the area around Lille in Northern France, historically brewed in early spring and kept in cold cellars for consumption in warmer weather. Although documented to exist in the 1800s, Jenlain is the prototypical modern amber lager version first bottled in the 1940s.',
          characteristicIngredients:
            'Base malts vary by beer color, but usually include pale, Vienna, and Munich types. Crystal-type malts of varying color. Sugar adjuncts may be used. Lager or ale yeast fermented at cool ale temperatures, followed by long cold conditioning. Continental hops.',
          styleComparison:
            'Calling this a farmhouse beer invites comparisons to Saison, which has a completely different balance - Bière de Garde is malty and smooth, while Saison is hoppy and bitter. Actually has more of a similarity in malt profile to a Bock.',
          entryInstructions:
            'Entrant must specify blond, amber, or brown Bière de Garde. If no color is specified, the judge should attempt to judge based on initial observation, expecting a malt flavor and balance that matches the color.',
          vitalStatistics: {
            OG: [1.06, 1.08],
            IBUs: [18, 28],
            FG: [1.008, 1.016],
            SRM: [6, 19],
            ABV: [6, 8.5],
          },
          commercialExamples:
            "Ch'Ti Blonde, Jenlain Ambrée, La Choulette Brune, Russian River Perdition, Saint Sylvestre 3 Monts Blonde, Two Brothers Domaine Dupage",
          tags: 'high-strength, pale-color, amber-color, any-fermentation, lagered, western-europe, traditional-style, amber-ale-family, malty',
        },
        description:
          'Three main variations are included in the style: the blond (blonde), the brown (brune), and the most traditional amber (ambrée).',
      },
    ],
  },
  {
    title: '25. Strong Belgian Ale',
    description:
      'This category contains the pale, well-attenuated, balanced to bitter beers, often more driven by yeast character than malt flavors, with generally higher alcohol (although a range exists within styles).',
    styles: [
      {
        title: '25A. Belgian Blond Ale',
        properties: {
          overallImpression:
            'A golden, moderately-strong Belgian ale with a pleasantly subtle citrusy-spicy yeast complexity, smooth malty palate, and dry, soft finish.',
          aroma:
            'Light to moderate grainy-sweet, slightly toasty, or crackery malt. Subtle to moderate yeast profile featuring fruity-citrusy esters (like oranges or lemons), and background spicy-peppery phenols. Light earthy or spicy hop notes optional. Light perfumy alcohol and suggestions of a light malty sweetness can give a slight honey- or sugar-like character. Subtle yet complex.',
          appearance:
            'Deep yellow to deep gold color. Generally very clear. Large, dense, and creamy white to off-white head. Good head retention with Belgian lace.',
          flavor:
            'Similar to the aroma, with the light to moderate grainy-sweet malt flavor being perceived first. Faint, lightly caramelized sugar or honey-like sweetness on palate. Medium bitterness, with the malt slightly more prominent in the balance. Moderate to low yeast profile with orange or lemon esters, and slight spicy-peppery phenols. Can have a light perfumy character. Light hop flavor, can be spicy or earthy, complementing yeast. Finishes medium-dry to dry, smooth, and soft, with light alcohol and malt in the aftertaste.',
          mouthfeel:
            'Medium-high to high carbonation, can give mouth-filling bubbly sensation. Medium body. Light to moderate alcohol warmth, but smooth. Can be somewhat creamy.',
          comments:
            'Most commercial examples are in the 6.5 - 7% ABV range. Often has an almost lager-like character, which gives it a cleaner profile in comparison to many other Belgian styles. Flemish-speaking Belgians use the term Blond, while the French speakers spell it Blonde. Many monastic or artisanal Belgian beers are called Blond but those are not representative of this style.',
          history:
            'Relatively recent development to further appeal to European Pils drinkers, becoming more popular as it is heavily marketed and widely distributed. Despite claims of links back to 1200, the beer style was created after World War II and first popularized by Leffe.',
          characteristicIngredients:
            'Belgian Pils malt, aromatic malts, sugar or other adjuncts, Belgian Abbey-type yeast strains, continental hops. Spices are not traditionally used; if present, should be a background character only.',
          styleComparison:
            'Similar strength and balance as a Belgian Dubbel but gold in color and without the darker malt flavors. Similar character as a Belgian Strong Golden Ale or Belgian Tripel, although a bit maltier, not as bitter, and lower in alcohol.',
          vitalStatistics: {
            OG: [1.062, 1.075],
            IBUs: [15, 30],
            FG: [1.008, 1.018],
            SRM: [4, 6],
            ABV: [6, 7.5],
          },
          commercialExamples:
            'Affligem Blond, Corsendonk Blond, Grimbergen Blonde, La Trappe Blond, Leffe Blond, Val-Dieu Blonde',
          tags: 'high-strength, pale-color, top-fermented, western-europe, traditional-style, balanced',
        },
      },
      {
        title: '25B. Saison',
        properties: {
          overallImpression:
            'A family of refreshing, highly attenuated, hoppy, and fairly bitter Belgian ales with a very dry finish and high carbonation. Characterized by a fruity, spicy, sometimes phenolic fermentation profile, and the use of cereal grains and sometimes spices for complexity. Several variations in strength and color exist.',
          aroma:
            'A pleasantly aromatic mix of fruity-spicy yeast and hops. The fruity esters are moderate to high, and often have a citrus fruit, pome fruit, or stone fruit character. Low to moderately-high spicy notes are often like black pepper, not clove. Hops are low to moderate and have a continental character (spicy, floral, earthy, or fruity). The malt is often overshadowed, but if detected is lightly grainy. Spices and herbs optional, but must not dominate. Sourness optional (see Comments).\nStrong versions have more aromatic intensity, and can add a light alcohol and moderate malt character. Table versions have less intensity and not have an alcohol character. Darker versions add malt character associated with darker grains.',
          appearance:
            'Pale gold to deep amber in color, sometimes pale orange. Long-lasting, dense, rocky white to ivory head. Belgian lace. Unfiltered, so clarity is variable (poor to good) and may be hazy. Effervescent.\nDarker versions can be copper to dark brown. Stronger versions may be a little deeper in color.',
          flavor:
            'A balance of fruity and spicy yeast, hoppy bitterness, and grainy malt with moderate to high bitterness, and a very dry finish. The fruity and spicy aspects are medium-low to medium-high, and hop flavor is low to medium, both with similar character as in the aroma (same descriptors apply). Malt is low to medium, with a soft, grainy palate. Very high attenuation, never with a sweet or heavy finish. Bitter, spicy aftertaste. Spices and herbs optional, but if used must be in harmony with the yeast. Sourness optional (see Comments).\nDarker versions will have more malt character, including flavors from the darker malts. Stronger versions will have greater malt intensity, and a light alcohol note.',
          mouthfeel:
            'Light to medium-low body. Very high carbonation. Effervescent. Light warming alcohol optional. Sourness rare but optional (see Comments).\nStronger versions can have up to medium body and be somewhat warming. Table versions have no warmth.',
          comments:
            'This style generally describes the standard-strength pale version, followed by differences for variations in strength and color. Darker versions tend to have more malt character and less apparent hop bitterness, yielding a more balanced presentation. Stronger versions often have more malt flavor, richness, warmth, and body simply due to the higher gravity. There is no correlation between strength and color.\nSourness is totally optional, and if present at low to moderate levels, it may substitute somewhat for bitterness in the balance. A Saison should not be both sour and bitter at the same time. The high attenuation may make the beer seem more bitter than the IBUs suggest. Pale versions are often more bitter and hoppy than darker versions. Yeast selection often drives the balance of fruity and spicy notes, and can change the character significantly; allow for a range of interpretations.\nOften called Farmhouse ales in the US, but this term is not common in Europe where they are simply part of a larger grouping of artisanal ales. Brettanomyces is not typical for this style; Saisons with Brett should be entered in the 28A Brett Beer style. A Grisette is a well-known type of Saison popular with miners; enter Grisette as 25B Saison, Session Strength, Comment: Grisette with wheat as the character grain.',
          history:
            "A provision ale from Wallonia, the French-speaking part of Belgium. Originally a lower-alcohol product so as to not debilitate farm and field workers, but tavern-strength products also existed. The best known modern saison, Saison Dupont, was first produced in the 1920s. Dupont's super saison was first produced in 1954, and its brown version in the mid-1980s. Fantôme begain producing its 'seasonal' saisons in 1988. While the style retains its rustic image, they are now mostly made in large breweries.",
          characteristicIngredients:
            "Pale base malt. Cereal grains, such as wheat, oats, spelt, or rye. May contain sugary adjuncts. Continental hops. Spicy-fruity Belgian Saison yeast. Spices and herbs are uncommon, but allowable if they don't dominate.",
          styleComparison:
            'The pale, standard strength versions is like a more highly-attenuated, hoppy, and bitter Belgian Blond Ale with a stronger yeast character. At super strength and pale color, similar to a Belgian Tripel, but often with more of a grainy, rustic quality and sometimes with a spicier yeast character.',
          entryInstructions:
            'The entrant must specify the strength (table, standard, super) and the color (pale, dark). The entrant may identify character grains used.\n15 - 22 (dark)\t\t5.0 - 7.0% (standard)\n7.0 - 9.5% (super)',
          vitalStatistics: {
            OG: [1.048, 1.068],
            IBUs: [20, 35],
            FG: [1.002, 1.008],
            SRM: [5, 22],
            ABV: [3.5, 9.5],
          },
          specialStatistics: {
            SRM: {
              pale: [5, 14],
              dark: [15, 22],
            },
            ABV: {
              table: [3.5, 5.0],
              standar: [5.0, 7.0],
              super: [7.0, 9.5],
            },
          },
          commercialExamples:
            'Ellezelloise Saison 2000, Lefebvre Saison 1900, Saison Dupont, Saison de Pipaix, Saison Voisin, Boulevard Tank 7',
          tags: 'standard-strength, pale-color, top-fermented, western-europe, traditional-style, bitter',
        },
      },
      {
        title: '25C. Belgian Golden Strong Ale',
        properties: {
          overallImpression:
            'A very pale, highly attenuated, strong Belgian ale that is more fruity and hoppy than spicy. Complex and delicate, the dry finish, light body, and high carbonation accentuate the yeast and hop character. Sparkling carbonation and effervescent, forming a rocky white head.',
          aroma:
            'A complex bouquet of fruity esters, herbal hops, and peppery alcohol over a nearly neutral malt base. The esters are moderate to high, often pome fruit, especially pear. Hops are herbal, floral, or spicy, low to moderate. Alcohol and phenols often have a peppery or perfumy quality, low to moderate. Alcohol perception should be soft, not hot or solventy. Nearly neutral malt, possibly slightly grainy-sweet.',
          appearance:
            'Pale yellow to gold in color. Good clarity. Effervescent. Massive, long-lasting, rocky, white head resulting in characteristic Belgian lace on the glass as it fades.',
          flavor:
            'Flavor profile similar to aroma (same descriptors and intensities apply) for esters, hops, malt, phenols, and alcohol. The pear-like esters, peppery alcohol, herbal hops, and soft malt flavors carry through the palate into the long, dry finish and aftertaste. Medium to high bitterness, accentuated by the dry finish and high carbonation, lasts into the aftertaste.',
          mouthfeel:
            'Very highly carbonated. Effervescent. Light to medium body, lighter than the substantial gravity would suggest. Carbonation accentuates the perception of lightness. Smooth but noticeable alcohol warmth, not hot or solventy.',
          comments:
            'References to the devil are included in the names of many commercial examples of this style, referring to their potent alcoholic strength and as a tribute to the original example (Duvel). Traditionally bottle-conditioned.',
          history:
            'Developed by the Moortgat brewery after WWI as a response to the growing popularity of Pilsner beers. Originally a darker beer, it achieved its modern form by the 1970s.',
          characteristicIngredients:
            'Pilsner malt with substantial sugary adjuncts. Continental hops. Fruity Belgian yeast. Fairly soft water. Spicing not traditional.',
          styleComparison:
            'Often confused with Belgian Tripel, but is usually paler, lighter-bodied, crisper, and drier. Tends to use yeast that favor ester development (particularly pome fruit) over spiciness in the balance, and has more of a late hop character.',
          vitalStatistics: {
            OG: [1.07, 1.095],
            IBUs: [22, 35],
            FG: [1.005, 1.016],
            SRM: [3, 6],
            ABV: [7.5, 10.5],
          },
          commercialExamples: 'Brigand, Delirium Tremens, Duvel, Judas, Lucifer, Russian River Damnation',
          tags: 'very-high-strength, pale-color, top-fermented, western-europe, traditional-style, bitter',
        },
      },
    ],
  },
  {
    title: '26. Monastic Ale',
    description:
      'Religious institutions have a long history of brewing in Belgium, although often interrupted by conflict and occupation such as during the Napoleonic Wars and World War I. Very few such institutions actually brew today, although many have licensed their names to commercial breweries. Despite the limited production, the traditional styles derived from these breweries have been quite influential and have spread beyond Belgium.\nVarious terms have been used to describe these beers, but many are protected appellations and reflect the origin of the beer rather than a style. Those monasteries could brew any style they choose, but the ones described in this category are those that are most commonly associated with this brewing tradition.\nWe differentiate beers in this category as those that were inspired by religious breweries. Despite claims of uniqueness, these beers do share a number of common attributes that help characterize the styles. All are top-fermenting, have very high attenuation ("more digestible" in Belgium), achieve high carbonation through bottle conditioning ("refermented in the bottle" in Belgium), and have distinctive, complex, and aggressive \'Belgian\' spicy-estery yeast character. Many are strong in alcohol.',
    styles: [
      {
        title: '26A. Belgian Single',
        properties: {
          overallImpression:
            'A blond, bitter, hoppy table beer that is very dry and highly carbonated. The aggressive fruity-spicy Belgian yeast character and high bitterness is forward in the balance, with a soft, supportive grainy-sweet malt palate, and a spicy-floral hop profile.',
          aroma:
            'Medium-low to medium-high Belgian yeast character, showing a fruity-spicy character along with medium-low to medium spicy or floral hops, rarely enhanced by light herbal or citrusy spice additions. Low to medium-low malt backdrop, with bready, crackery, grainy, or light honey notes. Fruit expression can vary widely (apple, pear, grapefruit, lemon, orange, peach, apricot). Phenols are typically like black pepper or clove. Bubblegum inappropriate.',
          appearance:
            'Pale yellow to medium gold color. Generally good clarity, with a moderate-sized, persistent, billowy white head with characteristic lacing.',
          flavor:
            'Initial malty flavor is light and has a honeyed biscuit, bready, or cracker character. Grainy but soft malt palate, and a crisp, dry, hoppy-bitter finish. Moderate spicy or floral hop flavor on the palate. Moderate esters similar in character to aroma. Light to moderate spicy phenols as found in the aroma. Medium to high bitterness, accentuated by dryness. The yeast and hop character lasts into the aftertaste.',
          mouthfeel:
            'Medium-light to medium body. Smooth. Medium-high to high carbonation, can be somewhat prickly. Should not have noticeable alcohol warmth.',
          comments:
            "Often not labeled or available outside the monastery, or infrequently brewed. Might also be called monk's beer, Brother's beer, or simply a Blond (we don't use this term to avoid confusion with the very different Belgian Blond Ale style). Highly attenuated, generally 85% or more.",
          history:
            "While monastic breweries have a tradition of brewing a lower-strength beer as a monk's daily ration (Westmalle began making theirs in 1922), the bitter, pale beer this style describes is a relatively modern invention reflecting current tastes. Westvleteren first brewed theirs in 1999, but it replaced older lower-gravity products.",
          characteristicIngredients: 'Pilsner malt. Belgian yeast. Continental hops.',
          styleComparison:
            'Like a top-fermented Belgian interpretation of a German Pils - pale, hoppy, and well-attenuated, but with a strong Belgian yeast character. Has less sweetness, higher attenuation, less character malt, and is more hop-centered than a Belgian Pale Ale. More like a much smaller, more highly-hopped Belgian Tripel (with its bitterness and dryness) than a smaller Belgian Blond Ale.',
          vitalStatistics: {
            OG: [1.044, 1.054],
            IBUs: [25, 45],
            FG: [1.004, 1.01],
            SRM: [3, 5],
            ABV: [4.8, 6],
          },
          commercialExamples:
            'Chimay Gold, La Trappe Puur, Russian River Redemption, St. Bernardus Extra 4, Westmalle Extra, Westvleteren Blond',
          tags: 'standard-strength, pale-color, top-fermented, western-europe, craft-style, bitter, hoppy',
        },
      },
      {
        title: '26B. Belgian Dubbel',
        properties: {
          overallImpression:
            'A deep reddish-copper, moderately strong, malty, complex Belgian ale with rich malty flavors, dark or dried fruit esters, and light alcohol blended together in a malty presentation that still finishes fairly dry.',
          aroma:
            'Moderate to moderately strong, rich malty aroma, with hints of chocolate, caramelized sugar, or toast. Never roasted or burnt. Moderate fruity esters, often dark or dried fruit, especially raisins and plums, sometimes pome fruit or banana. Low to moderate spicy, peppery phenols. Hops typically absent, but can have a low spicy, herbal, or floral character. The malt is strongest in the balance, with esters and spice adding complexity. Low soft, perfumy alcohol optional.',
          appearance:
            'Dark amber to copper in color, with an attractive reddish depth of color. Generally clear. Large, dense, and long-lasting creamy off-white head.',
          flavor:
            'Flavor profile similar to aroma (same descriptors and intensities apply) for malt, esters, phenols, alcohol, and hops. Medium-low to medium bitterness, but malt is always most prominent in the balance. The esters and phenols add complexity and interest to the malt, alcohol not typically tasted. Malty-rich, sometimes sweet flavor, that finishes moderately dry with a malty aftertaste accented by yeast esters and phenols.',
          mouthfeel:
            'Smooth, medium to medium-full body. Medium-high carbonation, which can influence the perception of body. Low alcohol warmth optional, never hot or solventy.',
          comments:
            'Most commercial examples are in the 6.5 - 7% ABV range. Can taste somewhat sweet due to restrained bitterness, but the beers are actually fairly dry.',
          history:
            'While dark and strong beers were produced long before, modern Dubbel traces back to the double brown or strong beer first produced at Westmalle in 1922 when the brewery was re-established after World War I. Other examples date from post-World War II.',
          characteristicIngredients:
            'Spicy-estery Belgian yeast. Impression of a complex grain bill, although many traditional versions are quite simple, with caramelized sugar syrup or unrefined sugars and yeast providing much of the complexity. Continental hops. Spices not typical; if present, should be subtle.',
          styleComparison:
            'Perhaps similar to a Dunkles Bock but with a Belgian yeast and sugar character. Similar in strength and balance to a Belgian Blond Ale, but with a richer malt and ester profile. Less strong and intense than a Belgian Dark Strong Ale.',
          vitalStatistics: {
            OG: [1.062, 1.075],
            IBUs: [15, 25],
            FG: [1.008, 1.018],
            SRM: [10, 17],
            ABV: [6, 7.6],
          },
          commercialExamples:
            'Chimay Red, Corsendonk Bruin, La Trappe Dubbel, Rochefort 6, St. Bernardus Pater 6, Westmalle Dubbel',
          tags: 'high-strength, amber-color, top-fermented, western-europe, traditional-style, malty',
        },
      },
      {
        title: '26C. Belgian Tripel',
        properties: {
          overallImpression:
            'A strong, pale, somewhat spicy Belgian ale with a pleasant rounded malt flavor, firm bitterness, and dry finish. Quite aromatic, with spicy, fruity, and light alcohol notes combining with the supportive clean malt character to produce a surprisingly drinkable beverage considering the high alcohol content.',
          aroma:
            'Complex but seamless bouquet of moderate to significant spiciness, moderate fruity esters, low alcohol, low hops, and light malt. Generous spicy, peppery, sometimes clove-like phenols. Esters often reminiscent of citrus fruit, like oranges or lemons, but may sometimes have a slight ripe banana character. A low yet distinctive spicy, floral, sometimes perfumy hop character is optional. Alcohols are soft, spicy, and low in intensity. The malt character is light, with a soft, slightly grainy-sweet, or slightly honey-like impression.',
          appearance:
            'Deep yellow to pale amber in color. Good clarity. Effervescent. Long-lasting, creamy, rocky, white head resulting in characteristic Belgian lace on the glass as it fades.',
          flavor:
            'Flavor profile similar to aroma (same descriptors apply) for malt, esters, phenols, alcohol, and hops. Esters low to moderate, phenols low to moderate, hops low to moderate, alcohol low, all well combined in a coherent presentation. Medium to high bitterness, accentuated by a dry finish. Moderate bitterness in the aftertaste with substantial spicy-fruity yeast character. Should not be sweet.',
          mouthfeel:
            'Medium-light to medium body, although lighter than the substantial gravity would suggest. Highly carbonated. The alcohol content is deceptive, and has little to no obvious warming sensation. Effervescent. Should not be heavy.',
          comments:
            'High in alcohol but does not taste strongly of alcohol. The best examples are sneaky, not obvious. High carbonation and attenuation helps bring out the many flavors and to increase the perception of a dry finish. Most traditional versions have at least 30 IBUs and are very dry.',
          history: 'Popularized by the monastery at Westmalle, first brewed in 1931.',
          characteristicIngredients:
            'Pilsner malt, often pale sugar adjuncts. Continental hops. Spicy-fruity Belgian yeast strains. Spice additions are generally not traditional, and if used, should be a background character only. Fairly soft water.',
          styleComparison:
            'May resemble a Belgian Golden Strong Ale but slightly darker and a bit fuller-bodied, with more emphasis on phenols and less on esters, and fewer late hops. Should not seem like a blond Barleywine.',
          vitalStatistics: {
            OG: [1.075, 1.085],
            IBUs: [20, 40],
            FG: [1.008, 1.014],
            SRM: [4.5, 7],
            ABV: [7.5, 9.5],
          },
          commercialExamples:
            'Chimay Tripel, La Rulles Tripel, La Trappe Tripel, St. Bernardus Tripel, Val-Dieu Triple, Westmalle Tripel',
          tags: 'high-strength, pale-color, top-fermented, western-europe, traditional-style, bitter',
        },
      },
      {
        title: '26D. Belgian Dark Strong Ale',
        properties: {
          overallImpression:
            'A dark, complex, very strong Belgian ale with a delicious blend of malt richness, dark fruit flavors, and spicy notes. Complex, rich, smooth, and dangerous.',
          aroma:
            'A complex and fairly intense mix of rich maltiness and deep fruit, accentuated by spicy phenols and alcohol. The malt character is moderately-high to high and has a deep, bready-toasty base with dark caramel notes, but no impression of dark or roasted malt. Esters are strong to moderately low, and reminiscent of raisins, plums, dried cherries, figs, dates, or prunes. Spicy phenols like black pepper or vanilla, not clove, may be present as a low to moderate background character. A soft, spicy, perfumy, or rose-like alcohol is low to moderate, but never hot or solvent-like. Hops are usually not noticeable, but if present can add a light spicy, floral, or herbal character.',
          appearance:
            'Deep amber to deep coppery-brown in color (dark in the style name implies more deeply colored than golden, not black). Huge, dense, moussy, persistent cream- to light tan-colored head. Usually clear.',
          flavor:
            'Rich and complex maltiness, but not heavy in the finish. The flavor character is similar to the aroma (same malt, ester, phenol, alcohol, and hop comments apply here as well). Moderately malty-rich on the palate, which can have a sweet impression if bitterness is low. Usually moderately dry to dry finish, although may be up to moderately sweet. Medium-low to moderate bitterness; alcohol provides some of the balance to the malt. Generally malty-rich balance, but can be fairly even with bitterness. The complex and varied flavors should blend smoothly and harmoniously, and often benefit from age. The finish should not be heavy or syrupy.',
          mouthfeel:
            'High carbonation but not sharp. Smooth but noticeable alcohol warmth. Body can range from medium-light to medium-full and creamy. Most are medium-bodied.',
          comments:
            'Also known as a Belgian Quad, mainly outside of Belgium (Quadruple is the name of a specific beer). Has a wider range of interpretation than many other Belgian styles. Traditional versions tend to be drier than many modern commercial versions, which can be rather sweet and full-bodied. Many examples are simply known by their strength or color designation. Some might be labeled Grand Cru, but this is more of a statement of quality than style.',
          history:
            'Westvleteren started making their version just before World War II, with Chimay and Rochefort adding their examples just after. Other monastic breweries created products towards the end of the 20th century, but some secular breweries began producing similar beers starting around 1960.',
          characteristicIngredients:
            'Spicy-estery Belgian yeast. Impression of a complex grain bill, although many traditional versions are quite simple, with caramelized sugar syrup or unrefined sugars and yeast providing much of the complexity. Continental hops. Spices not typical; if present, should be subtle.',
          styleComparison:
            'Like a larger Belgian Dubbel, with a fuller body and increased malt richness. Not as bitter or hoppy as a Belgian Tripel, but of similar strength.',
          vitalStatistics: {
            OG: [1.075, 1.11],
            IBUs: [20, 35],
            FG: [1.01, 1.024],
            SRM: [12, 22],
            ABV: [8, 12],
          },
          commercialExamples:
            'Achel Extra Bruin, Boulevard The Sixth Glass, Chimay Blue, Rochefort 10, St. Bernardus Abt 12, Westvleteren 12',
          tags: 'very-high-strength, amber-color, top-fermented, western-europe, traditional-style, malty',
        },
      },
    ],
  },
  {
    title: '27. Historical Beer',
    description:
      "The Historical Beer category contains styles that either have all but died out in modern times, or that were much more popular in past times and are now known only through recreations. This category can also be used for traditional or indigenous beers of cultural importance within certain countries. Placing a beer in the historical category does not imply that it is not currently being produced, just that it is a very minor style or perhaps is in the process of rediscovery by craft brewers.\nHistorical Beer can be a minor style, currently commercially produced or not, that is not present in the Style Guidelines as a Classic Style. It could be that we haven't heard of it, that we never see it in competition, or that we have insufficient data to prepare a reasonable set of judging guidelines. If it is a style with a name that is or was actually used, then it likely goes into this category. This style is not for experimental beers that were never produced, or for other Classic Styles with added Specialty-Type ingredients.\nAny Historical Beer listed in this category or contained on the Provisional Style list is considered a Classic Style for purposes of entering in Specialty-Type beer categories with added ingredients (fruit, spice, wood, smoke, etc.). This means a Historical Style beer can be used as a base style for Specialty-Type beers without automatically making the beer Experimental.\nThe BJCP welcomes well-researched submissions of Historical Styles that may be appropriate for our Provisional Styles list on our website, or for a future inclusion in these Guidelines.\nEntry Instructions: The entrant must either specify a style with a BJCP-supplied description from the list below, or specify a different historical beer style that is not described elsewhere in these guidelines. In the case of a style that has changed substantially over the years (such as Porter or Stout), the entrant may specify an existing BJCP style as well as an era (e.g., 1820 English Porter). When the entrant specifies any style not on the BJCP-supplied list in this category or on the Provisional Style list, the entrant must provide a description of the style for the judges in sufficient detail to allow the beer to be judged. If a beer is entered with just a style name and no description, it is very unlikely that judges will understand how to judge it. Currently defined examples: Kellerbier, Kentucky Common, Lichtenhainer, London Brown Ale, Piwo Grodziskie, Pre-Prohibition Lager, Pre-Prohibition Porter, Roggenbier, Sahti.",
    styles: [
      {
        title: 'Historical Beer: Kellerbier',
        properties: {
          overallImpression:
            'An unfiltered, unpasteurized, fully-attenuated German lager traditionally served from lagering vessels. May be a little richer, more robust, and rustic than the base styles. A fresh beer without fermentation defects associated with young, green (unfinished) beer.',
          aroma:
            'Reflects base style. May have an added bready, yeasty character from the yeast. Clean. Pale versions can have a more robust hop character. Dark versions can have a richer malt profile.',
          appearance:
            'Reflects base style. Can be somewhat hazy or cloudy, but never murky. Likely a little darker in appearance than the base style.',
          flavor:
            'Reflects base style. May have an added bready, yeasty character from the yeast. Pale versions can have a more robust hop character. Dark versions can have a richer malt profile, but should never be roasty. May be slightly more bitter than the base style, and be a little heavier in the finish. Fully fermented with a clean fermentation profile; should not have eggy, buttery, apple-like, or similar flaws.',
          mouthfeel:
            'Reflects base style. May have a bit more body and a creamier texture than the base style. Carbonation typical of the base style, but may be lower.',
          comments:
            'A traditional serving style more than a beer style, yet these beers do have sensory differences from the base beers. Judge these somewhat like Specialty-Type Beers; consider the range of kellerbiers based on Helles to Märzen to Dunkel to be a continuous spectrum, so allow the brewer to pick the closest one without being too picky about strict adherence to the base style.\nThe name literally means cellar beer, and is a natural, gentle handling of fresh-tasting German lagerbier for seasonal, on-premise service. Like British Bitters, best enjoyed locally as the bottled examples may lack the characteristic freshness.',
          history:
            'Originally referred to lager beer matured in the caves or cellars under the brewery, and then served from them. First applied to amber lager from Franconia, then later to local Munich styles. More recently used internationally to create specialty Pils variants. By tradition, a serving style for a popular summer specialty in Bavaria, but now adapted broadly as a marketing term for unfiltered lagers.',
          characteristicIngredients:
            'Same as base styles. Traditionally naturally carbonated. Dry-hopping is not a traditional German brewing method, but some modern pale examples use this technique - which is allowable in this style as long as it is balanced. Traditionally lagered and unfiltered, these beers were never meant to be packaged for external sale.',
          styleComparison:
            'Richer or more robust than the base style, possibly with a bit more body and mouthfeel. Can be slightly cloudier than base beer.',
          entryInstructions:
            'The entrant must specify the base style: German Pils, Munich Helles, Märzen, or Munich Dunkel.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'Märzen - Faust Kräusen Naturtrüb, Mahrs Bräu aU Ungespundet Kellerbier; Dunkel - Engel Kellerbier Dunkel, Paulaner Ur-Dunkel Naturtrüb; Helles - ABK Kellerbier Naturtrüb, Löwenbräu 1747 Original; Pils - Giesinger Feines Pilschen, Ketterer Zwickel-Pils',
          tags: 'standard-strength, bottom-fermented, central-europe, traditional-style, balanced',
        },
        description:
          'The original Kellerbier is a Märzen-type lager from the Franconia region of Germany, but other traditional versions are based on Munich Helles and Dunkel lagers. Variations based on Pils are a more modern invention with a wider international following and higher production.\n',
      },
      {
        title: 'Historical Beer: Kentucky Common',
        properties: {
          overallImpression:
            'A clean, dry, refreshing, slightly malty dark beer with high carbonation. Mild-tasting, with light toast and caramel flavors, served very fresh as a sessionable saloon beer.',
          aroma:
            'Low to medium grainy, corn-like, or sweet maltiness with a low toast, biscuity-grainy, bready, or caramel malt accent. Medium to moderately-low hop aroma, usually floral or spicy in character. Clean fermentation profile, with possible faint berry ester. Low levels of DMS optional. No sourness. Malt-forward in the balance.',
          appearance:
            'Amber-orange to brown in color. Typically clear, but may have some light haze. Foam stand may not be long lasting, and is usually white to beige in color.',
          flavor:
            'Moderate grainy-sweet maltiness with low to medium-low caramel, toffee, bready, or biscuity notes. Generally light palate flavors typical of adjunct beers; a low grainy, corn-like sweetness is common. Medium to low floral or spicy hop flavor. Medium to low bitterness, no coarse or harsh aftertaste. May exhibit light fruitiness. Balance in the finish is towards the malt, possibly with a lightly flinty or minerally-sulfate flavor. The finish is fairly dry. No sourness.',
          mouthfeel:
            'Medium to medium-light body with a relatively soft mouthfeel. Highly carbonated. Can have a creamy texture.',
          comments:
            'Modern accounts of the style often mention lactic sourness or sour mashing, but brewing records from around 1900 at larger breweries have no indication of long acid rests, sour mashing, or extensive aging. These stories are likely modern homebrewer inventions, theorizing that since local Bourbon distillers used a sour mash, beer brewers must also done so. No records indicate sour mashing or even a sour profile in the beer; rather the opposite, that it was brewed as an inexpensive, present-use ale. Enter soured versions in 28B Mixed-Fermentation Sour Beer.',
          history:
            'An American original, Kentucky Common was almost exclusively produced and sold around Louisville, Kentucky from some time after the Civil War until Prohibition. It was inexpensive and quickly produced, racked into barrels while actively fermenting, and tightly bunged to allow carbonation in the saloon cellar. Before the style died, it accounted for about 75% of sales around Louisville.\nSome have speculated it was a dark variant of Cream Ale, created by immigrant Germanic brewers who added darker grains to help acidity the local carbonate water.',
          characteristicIngredients:
            'Six-row barley malt. Corn grits. Caramel and black malt. Rustic American bittering hops. Imported Continental finishing hops. High carbonate water. Ale yeast.',
          styleComparison:
            'Like a darker-colored Cream Ale emphasizing corn, but with some light character malt flavor. Malt flavors and balance are probably closest to modern adjunct-driven International Amber or Dark Lagers, Irish Red Ales, or Belgian Pale Ales.',
          vitalStatistics: {
            OG: [1.044, 1.055],
            IBUs: [15, 30],
            FG: [1.01, 1.018],
            SRM: [11, 20],
            ABV: [4, 5.5],
          },
          commercialExamples: 'Apocalypse Brew Works 1912',
          tags: 'standard-strength, amber-color, top-fermented, north-america, historical-style, balanced',
        },
      },
      {
        title: 'Historical Beer: Lichtenhainer',
        properties: {
          overallImpression:
            'A sour, smoked, lower-gravity historical central European wheat beer. Complex yet refreshing character due to high attenuation and carbonation, along with low bitterness and moderate sourness.',
          aroma:
            "Moderately strong fresh smoky aroma. Light hints of sourness. Medium-low fruity esters, possibly apples or lemons. Moderate bready, grainy malt. The smoke character is stronger than the bready notes, and the smoke has a 'dry' character, like the remnants of an old fire, not a 'greasy' smoke. No hops.",
          appearance:
            'Tall off-white head, rocky and persistent. Yellow to gold color. Fair clarity, may be somewhat hazy.',
          flavor:
            'Moderately strong fruity flavor, possibly lemons or apples. Moderate intensity, clean lactic tartness without any funkiness. Similar dry wood smoke character as aroma, medium strength. Dry finish, with acidity and smoke in the aftertaste. Low bitterness; acidity is providing the balance, not hops. Fresh, clean palate, and slightly puckery aftertaste. The wheat character is on the low side; the smoke and acidity are more prominent in the balance. The tart, lemony, or green apple flavor is strongest in the finish, with smoke a close second. No hops.',
          mouthfeel: 'Tingly acidity. High carbonation. Medium to medium-light body.',
          comments: 'Served young. Smoke and sour is an unusual combination that can be an acquired taste.',
          history:
            'Originating in Lichtenhain, in Thüringen (central Germany). Height of popularity was towards the end of the 1800s, and was widely available throughout Thüringen. Like a pre-1840 Berliner Weisse.',
          characteristicIngredients:
            'Smoked barley malt, wheat malt, Lacto, top-fermenting yeast. Grists vary, but the wheat would typically be 30-50%. Can be made with all barley malt.',
          styleComparison:
            'In the same general historical lower-alcohol central European wheat beer family as Gose, Grodziskie, and Berliner Weisse; has elements of all of them but with its own unique balance - sour and smoke is not found in any of the other styles. Not as acidic as Berliner Weisse, probably more like a smoked Gose without coriander and salt, or a Grodziskie with Gose-like acidity.',
          vitalStatistics: {
            OG: [1.032, 1.04],
            IBUs: [5, 12],
            FG: [1.004, 1.008],
            SRM: [3, 6],
            ABV: [3.5, 4.7],
          },
          commercialExamples: 'Live Oak Lichtenhainer, Wöllnitzer Weissbier',
          tags: 'standard-strength, pale-color, top-fermented, central-europe, historical-style, wheat-beer-family, sour, smoke',
        },
      },
      {
        title: 'Historical Beer: London Brown Ale',
        properties: {
          overallImpression:
            'A luscious, sweet, malty, low-alcohol dark brown ale, with caramel and toffee malt complexity and a sweet-tasting finish.',
          aroma:
            'Moderate malty-sweet aroma, often with a rich, caramel, or toffee-like character. Low to medium fruity esters, often dark fruit like plums. Very low earthy or floral hop aroma optional.',
          appearance:
            'Medium to very dark brown color, but can be almost black. Nearly opaque, although should be relatively clear if visible. Low to moderate off-white to tan head.',
          flavor:
            'Deep, caramel or toffee sweet malty flavor on the palate, lasting into the finish, often with hints of biscuit and coffee. Some dark fruit esters can be present; relatively clean fermentation profile for an English ale. Low bitterness. Low earthy or floral hop flavor optional, but rare. Moderately-low roasty or bitter black malt flavor optional. Moderately sweet finish with a smooth, malty aftertaste. May have a sugary-sweet flavor.',
          mouthfeel:
            'Medium body, but the residual sweetness may give a heavier impression. Medium-low to medium carbonation. Quite creamy and smooth in texture, particularly for its gravity.',
          comments:
            "Increasingly rare; Mann's has over 90% market share in Britain, but in a vanishingly small segment. Always bottled. Frequently used as a sweet mixer with cask mild and bitter in pubs. Commercial versions can be pasteurized and back-sweetened, which gives more of a sugary-sweet flavor.",
          history:
            'Developed by Mann\'s as a bottled product in 1902. Claimed at the time to be "the sweetest beer in London." Pre-WWI versions were around 5% ABV, but same general balance. Declined in popularity in second half of 20th century, and now nearly extinct.',
          characteristicIngredients:
            "English pale ale malt as a base with a large proportion of darker caramel malts and often some black and wheat malts (this is Mann's traditional grist - others can rely on dark sugars for color and flavor). Moderate to high carbonate water. English hops. Post-fermentation sweetening with lactose or artificial sweeteners, or sucrose, if pasteurized.",
          styleComparison:
            'May seem somewhat like a less roasty version of a Sweet Stout (and lower-gravity, at least for US sweet stout examples) or a sweet version of a Dark Mild.',
          vitalStatistics: {
            OG: [1.033, 1.038],
            IBUs: [15, 20],
            FG: [1.012, 1.015],
            SRM: [22, 35],
            ABV: [2.8, 3.6],
          },
          commercialExamples: "Harveys Bloomsbury Brown Ale, Mann's Brown Ale",
          tags: 'session-strength, dark-color, top-fermented, british-isles, historical-style, brown-ale-family, malty, sweet',
        },
      },
      {
        title: 'Historical Beer: Piwo Grodziskie',
        properties: {
          overallImpression:
            'A low-gravity, bitter, oak-smoked historical central European wheat beer with a clean fermentation profile and no sourness. Highly carbonated, dry, crisp, and refreshing.',
          aroma:
            'Low to moderate oak wood smoke is the most prominent aroma component, but can be subtle and hard to detect. A low spicy, herbal, or floral hop aroma is typically present, and should be lower than or equal to the smoke in intensity. Hints of grainy wheat are also detected in the best examples. The aroma is otherwise clean, although light pome fruit esters (especially ripe red apple or pear) are welcome. No acidity. Light sulfur optional.',
          appearance:
            'Pale yellow to gold in color with excellent clarity. A tall, billowy, white, tightly-knit head with excellent retention is distinctive. Murkiness is a fault.',
          flavor:
            'Moderately-low to medium oak smoke flavor up front which carries into the finish; the smoke can be stronger in flavor than in aroma. The smoke character is gentle, should not be acrid, and can lend an impression of sweetness. A moderate to strong bitterness is readily evident which lingers through the finish. The overall balance is toward bitterness. Low but perceptible spicy, herbal, or floral hop flavor. Low grainy wheat character in the background. Light pome fruit esters (red apple or pear) may be present. Dry, crisp finish. No sourness.',
          mouthfeel:
            'Light in body, with a crisp and dry finish. Carbonation is quite high and can add a slight carbonic bite or prickly sensation. No alcohol warmth.',
          comments:
            'Pronounced in English as "pivo grow-JEES-kee-uh" (meaning: Grodzisk beer). Known as Grätzer (pronounced "GRATE-sir") in German-speaking countries, and in some beer literature. Traditionally made using a multi-step mash, a long boil (~2 hours), and multiple strains of ale yeast. The beer is never filtered but Isinglass is used to clarify before bottle conditioning. Traditionally served in tall conical glassware to accommodate the vigorous foam stand.',
          history:
            'Developed as a unique style centuries ago in the Polish city of Grodzisk (known as Grätz when ruled by Prussia and Germany). Its fame and popularity rapidly extended to other parts of the world in the late 19th and early 20th century. Regular commercial production declined after WWII and ceased in the 1990s. This style description describes the traditional version during its period of greatest popularity.',
          characteristicIngredients:
            'Oak-smoked wheat malt, which has a less intense smoke character than German Rauchmalz, and a drier, crisper, leaner quality - a smoky bacon or ham flavor is inappropriate. Traditional Polish, Czech or German hops. Moderate hardness sulfate water. Clean, attenuative ale yeast; Weizen yeast inappropriate.',
          styleComparison:
            'Similar in strength to a Berliner Weisse, but never sour and much more bitter. Has a smoked character but less intense than in a Rauchbier. Lower gravity than a Lichtenhainer, but more bitter and not sour. More bitter than a Gose, but no salt and spices.',
          vitalStatistics: {
            OG: [1.028, 1.032],
            IBUs: [20, 35],
            FG: [1.006, 1.012],
            SRM: [3, 6],
            ABV: [2.5, 3.3],
          },
          commercialExamples: 'Live Oak Grodziskie',
          tags: 'session-strength, pale-color, top-fermented, central-europe, historical-style, wheat-beer-family, bitter, smoke',
        },
      },
      {
        title: 'Historical Beer: Pre-Prohibition Lager',
        properties: {
          overallImpression:
            'A bitter and hoppy pale American adjunct lager, often with a robust, corny flavor profile, although more crisp and neutral-tasting versions exist.',
          aroma:
            'Low to medium grainy maltiness. Low to moderate corn-like sweetness optional. Medium to moderately-high rustic, floral, herbal, or spicy hop aroma, not modern fruity or citrusy varieties. Clean fermentation profile. May show some yeast character, similar to modern American Lager. Low DMS acceptable.',
          appearance: 'Yellow to deep gold color. Substantial, long lasting white head. Bright clarity.',
          flavor:
            'Medium to medium-high maltiness with a grainy flavor. Optional corn-like roundness and impression of sweetness. Substantial hop bitterness stands up to the malt and lingers through the dry, soft to crisp finish. Medium to high rustic, floral, herbal, or spicy hop flavor. Medium to high bitterness that is clean not coarse. No harsh aftertaste. Generally neutral fermentation profile, but some yeast character similar to American Lager is allowable.',
          mouthfeel:
            'Medium to medium-full body with a moderately rich and creamy mouthfeel. Smooth and well-lagered. Medium to high carbonation levels.',
          comments:
            'Sometimes called Classic American Pilsner. Rice-based versions have a crisper, more neutral character, and lack corn-like flavors.',
          history:
            'An adaptation of continental lagers by immigrant German brewers in the mid-1800s in the US. Became most popular by the 1870s, but weakened in strength, bitterness, and popularity after Prohibition, and was largely replaced by Standard American Lager. Resurrected by homebrewers in the mid-1990s, but few commercial examples exist.',
          characteristicIngredients:
            'Six-row barley. Corn or rice adjuncts, up to 30%. Traditional American or Continental hops. Modern American hops are inappropriate. Lager yeast.',
          styleComparison:
            'Similar balance and bitterness as modern Czech Premium Pale Lagers, but exhibiting native American grains and hops from the era before US Prohibition. More robust, bitter, and flavorful than modern pale American Lagers, often with higher alcohol.',
          vitalStatistics: {
            OG: [1.044, 1.06],
            IBUs: [25, 40],
            FG: [1.01, 1.015],
            SRM: [3, 6],
            ABV: [4.5, 6],
          },
          commercialExamples:
            'Capital Supper Club, Coors Batch 19, Little Harpeth Chicken Scratch, Schell Deer Brand, Urban Chestnut Forest Park Pilsner',
          tags: 'standard-strength, pale-color, bottom-fermented, lagered, north-america, historical-style, pilsner-family, bitter, hoppy',
        },
      },
      {
        title: 'Historical Beer: Pre-Prohibition Porter',
        properties: {
          overallImpression:
            'A historical American adaptation of English Porter by German immigrants using American ingredients, including adjuncts.',
          aroma:
            'Grainy malt aroma with low levels of chocolate, caramel, biscuit, burnt sugar, licorice, or slightly burnt malt. Low hop aroma. Low to moderate low levels of corn or DMS acceptable. No to very low esters. Diacetyl low to none. Clean lager fermentation profile acceptable.',
          appearance:
            'Medium to dark brown, though some examples can be nearly black in color, with ruby or mahogany highlights. Relatively clear. Light to medium tan head, persistent.',
          flavor:
            'Moderate grainy-bready malt flavor, with low levels of chocolate, burnt malt, burnt sugar, caramel, biscuit, licorice, molasses, or toast. Corn or DMS flavor acceptable at low to moderate levels. Medium-low to moderate bitterness. Low floral, spicy, or earthy hop flavor optional. Balance is typically even between malt and hops, with a moderately dry finish. Clean fermentation profile, but faint esters are allowable.',
          mouthfeel:
            'Medium-light to medium body. Moderate carbonation. Low to moderate creaminess. May have a slight dark malt astringency.',
          comments:
            'Also sometimes known as Pennsylvania Porter or East Coast Porter. This style does not describe colonial-era products.',
          history:
            'Commercially brewed in Philadelphia during the revolutionary period as an adaptation of English beer. Evolved later as German immigrants applied lager brewing methods during the second half of the 1800s. Prohibition ended most porter brewing in the US, except in a few regional Northeast and Mid-Atlantic states where it was most popular.',
          characteristicIngredients:
            'Two row or six row malt. Low percentages of dark malts including black, chocolate, and brown malt (roasted barley is not typically used). Adjuncts are acceptable, including corn, brewers licorice, molasses, and porterine. More historical versions will have up to twenty percent adjuncts. Lager or ale yeast. Historical or traditional American bittering hops, American or German finishing hops.',
          styleComparison:
            'Smoother and less hoppy-bitter than a (modern) American Porter. Less caramelly and smoother than an English Porter with more of an adjunct or lager character. More bitterness and roast than an International Dark Lager.',
          vitalStatistics: {
            OG: [1.046, 1.06],
            IBUs: [20, 30],
            FG: [1.01, 1.016],
            SRM: [20, 30],
            ABV: [4.5, 6],
          },
          commercialExamples: 'Stegmaier Porter, Yuengling Porter',
          tags: 'standard-strength, dark-color, any-fermentation, north-america, historical-style, porter-family, malty',
        },
      },
      {
        title: 'Historical Beer: Roggenbier',
        properties: {
          overallImpression:
            'A Dunkles Weissbier made with rye rather than wheat, but with a greater body and light finishing hops. The rye gives a bready and peppery flavor, a creamy body, and a dry, grainy finish that blends with the distinctive banana-and-clove weizen yeast character.',
          aroma:
            'Light to moderate spicy rye aroma (like black pepper) intermingled with light to moderate weizen yeast aromatics (spicy clove and fruity esters, either banana or citrus). Light spicy, floral, or herbal hops are acceptable.',
          appearance:
            'Light coppery-orange to very dark reddish or coppery-brown color. Large creamy off-white to tan head, quite dense and persistent, often thick and rocky. Cloudy, hazy appearance.',
          flavor:
            'Grainy, moderately-low to moderately-strong spicy-peppery rye flavor, often having a hearty flavor reminiscent of rye or pumpernickel bread. Medium to medium-low bitterness allows an initial malt sweetness (sometimes with a bit of caramel) to be tasted before yeast and peppery rye character takes over. Low to moderate banana-and-clove weizen yeast character, although the balance can vary. Medium-dry, grainy finish with a lightly bitter (from rye) aftertaste. Low to moderate spicy, herbal, or floral hop flavor acceptable, and can persist into aftertaste.',
          mouthfeel: 'Medium to medium-full body. High carbonation. Moderately creamy.',
          comments:
            'Rye is a huskless grain and is difficult to mash, often resulting in a gummy mash texture that is prone to sticking. Rye has been characterized as having the most assertive flavor of all cereal grains. It is inappropriate to add caraway seeds, as some American brewers do; the spicy rye character is traditionally from the rye grain only.',
          history:
            'A specialty German rye beer originally brewed in Regensburg, Bavaria in 1988 by Schierlinger. After eventual purchase by Paulaner, the beer is now positioned as a regional brand and thus hard to find as an export.',
          characteristicIngredients:
            'Malted rye, up to 60% of the grist. Pale and wheat malts. Crystal-type malts and debittered dark malts can be used. Weizen yeast. German or Czech hops. Patented decoction type mash.',
          styleComparison:
            'A more distinctive variant of a Dunkles Weissbier using malted rye instead of malted wheat. American Rye Beers will not have the weizen yeast character, and likely more hops.',
          vitalStatistics: {
            OG: [1.046, 1.056],
            IBUs: [10, 20],
            FG: [1.01, 1.014],
            SRM: [14, 19],
            ABV: [4.5, 6],
          },
          commercialExamples: 'Thurn und Taxis Roggen',
          tags: 'standard-strength, amber-color, top-fermented, central-europe, historical-style, wheat-beer-family',
        },
      },
      {
        title: 'Historical Beer: Sahti',
        properties: {
          overallImpression:
            'A sweet, heavy, strong traditional Finnish farmhouse beer usually with rye and juniper, and a banana-clove yeast character.',
          aroma:
            'Sweet, worty malt impression. Grainy malt, caramel, and rye in background. Light alcohol aroma. High banana esters with moderate to moderately-high clove-like phenols. May have a low to moderate woody juniper character. Not sour. No hops.',
          appearance:
            'Yellow to dark brown color; most are medium to dark amber. Generally quite cloudy and turbid. Little head, due to low carbonation.',
          flavor:
            'Fairly sweet and often worty raw malt flavor, grainy with some caramel and toffee. Low bitterness. No hop flavor. Light woody or piney character acceptable. Moderate to strong banana and fruitiness, moderate clove and spiciness. Fairly sweet finish. Fresh, not sour.',
          mouthfeel:
            'Thick, viscous, and heavy with protein (no boil means no hot break). Nearly still to medium-low carbonation, similar to English cask ale. Warming from the alcohol level and young age, but this is often masked by sweetness.',
          comments:
            "The use of rye doesn't mean that it should taste like caraway (a common flavor in rye bread). The juniper acts a bit like hops in the balance and flavor, providing a flavor and bitterness counterpoint to the sweet malt. Piney, woody juniper character more common than gin-like berries.",
          history:
            'An indigenous traditional style from Finland; a farmhouse tradition for at least 500 years, often brewed for festive occasions like summer weddings, and consumed within a week or two of brewing.',
          characteristicIngredients:
            "Malted barley. Rye is common. Low hops, if any. Juniper boughs (with or without berries) used for lautering (traditionally in a hollowed-out log). Uses Finnish baker's yeast in a fast, warm fermentation (German Weizen yeast is a reasonable substitute). Long step mash regime. Wort is not boiled.",
          styleComparison: 'Passing resemblance to Weizenbocks, but sweet and thick with a rye and juniper character.',
          vitalStatistics: {
            OG: [1.076, 1.12],
            IBUs: [0, 15],
            FG: [1.016, 1.038],
            SRM: [4, 22],
            ABV: [7, 11],
          },
          commercialExamples: 'Now made year-round by several breweries in Finland.',
          tags: 'high-strength, amber-color, top-fermented, central-europe, historical-style, spice',
        },
      },
    ],
  },
  {
    title: '28. American Wild Ale',
    description:
      'The name American Wild Ale is commonly used by craft brewers and homebrewers. However, the word Wild does not imply that these beers are necessarily spontaneously-fermented; rather, it indicates that they are influenced by microbes other than traditional brewer\'s yeasts, or perhaps that they are mixed-fermentation beers. The use of the word American does not mean that the beer has to be based on a Classic Style American beer style, or that the methods are solely practiced in the United States. Base styles in this category do not have to be Classic Styles at all (although they can be); something like, "blond ale, 7%" would be fine, since the underlying style is often lost under the fermentation character.\nThis category is intended for a wide range of beers that do not fit traditional European sour, wild, or spontaneously-fermented styles. All of the styles in this category are Specialty-Type Beers where many creative interpretations are possible, and the styles are defined only by the use of specific fermentation profiles and ingredients. As specialty styles, the mandatory description provided by the entrant is of the utmost importance to the judge.\nThe styles in this category are differentiated by the types of yeast and bacteria used - see the preamble to each style for more information. We use the conversational shorthand terms used in the brewing industry: Brett for Brettanomyces, Sacch for Saccharomyces, Lacto for Lactobacillus, and Pedio for Pediococcus. See the Glossary for additional information. The Wild Specialty Beer style is for beers for other styles within this category when Specialty-Type Ingredients are added. Background levels of oak may be used in all styles within this category, but beers aged in other woods with unique flavors or barrels that contained other alcohol products must be entered in the Wild Specialty Beer style.',
    styles: [
      {
        title: '28A. Brett Beer',
        properties: {
          overallImpression:
            'Most often drier and fruitier than the base style suggests. Fruity or funky notes range from low to high, depending on the age of the beer and strains of Brett used. May possess a light non-lactic acidity.',
          aroma:
            'Variable by base style. Young Brett beers will possess more fruity notes (e.g., tropical fruit, stone fruit, or citrus), but this is variable by the strains of Brett used. Older Brett beers may start to develop a little funk (e.g., barnyard, wet hay, or slightly earthy or smoky notes), but this character should not dominate.',
          appearance:
            'Variable by base style. Clarity can be variable, and depends on the base style and ingredients used. Some haze is not necessarily a fault.',
          flavor:
            'Variable by base style. Brett character may range from minimal to aggressive. Can be quite fruity (e.g., tropical fruit, berry, stone fruit, citrus), or have some smoky, earthy, or barnyard character. Should not be unpleasantly funky, such as Band-Aid, fetid, nail polish remover, cheese, etc. Always fruitier when young, gaining more funk with age. May not be lactic. Malt flavors are often less pronounced than in the base style, leaving a beer most often dry and crisp due to high attenuation by the Brett.',
          mouthfeel:
            'Variable by base style. Generally has a light body, lighter than what might be expected from the base style but an overly thin body is a fault. Generally moderate to high carbonation. Head retention is variable, but often less than the base style.',
          comments:
            "The base style describes most of the character of these beers, but the addition of Brett ensures a drier, thinner, and often fruitier and funkier product. Younger versions are brighter and fruitier, while older ones possess more depth of funk and may lose more of the base style character. The Brett character should always meld with the style; these beers should never be a 'Brett bomb'. While Brett can produce low levels of organic acids, it is not a primary beer souring method.",
          history:
            "Modern American craft beer interpretations of Belgian wild ales, or experimentations inspired by Belgian wild ales or historical English beers with Brett. So-called 100% Brett beers gained popularity after the year 2000, but this was when S. Trois was thought to be a Brett strain (which it isn't). Brett used in conjunction with a Sacch fermentation is standard practice now.",
          characteristicIngredients:
            'Virtually any style of beer (except those already using a Sacch/Brett co-fermentation), then finished with one or more strains of Brett. Alternatively, a mixed fermentation with Sacch and one or more strains of Brett. No Lacto.',
          styleComparison:
            "Compared to the same beer style without Brett, a Brett Beer will be drier, more highly attenuated, fruitier, lighter in body, and slightly funkier as it ages. Less sourness and depth than Belgian 'wild' ales.",
          entryInstructions:
            'The entrant must specify either a Base Style, or provide a description of the ingredients, specs, or desired character. The entrant may specify the strains of Brett used.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'Boulevard Saison Brett, Hill Farmstead Arthur, Logsdon Seizoen Bretta, Lost Abbey Brett Devo, Russian River Sanctification, The Bruery Saison Rue',
          tags: 'wild-fermentation, north-america, craft-style, specialty-beer',
        },
        description:
          'Intended for beer with or without oak aging that has been fermented with Sacch and Brett, or with Brett only.\n',
      },
      {
        title: '28B. Mixed-Fermentation Sour Beer',
        properties: {
          overallImpression: 'A sour and funky version of a base style of beer.',
          aroma:
            'Variable by base style. The contribution of non-Sacch microbes should be noticeable to strong, and often contribute a sour and funky, wild note. The best examples will display a range of aromatics, rather than a single dominant character. The aroma should be inviting, not harsh or unpleasant.',
          appearance:
            'Variable by base style. Clarity can be variable; some haze is not a fault. Head retention can be poor.',
          flavor:
            'Variable by base style. Look for an agreeable balance between the base beer and the fermentation character. A range of results is possible from fairly high acidity and funk to a subtle, pleasant, harmonious beer. The best examples are pleasurable to drink with the esters and phenols complementing the malt or hops. The wild character can be prominent, but does not need to be dominating in a style with an otherwise strong malt or hop profile. Acidity should be firm yet enjoyable, and ranging from clean to complex, but should not be biting or vinegary; prominent, objectionable, or offensive acetic acid is a fault. Bitterness tends to be low, especially as sourness increases.',
          mouthfeel:
            'Variable by base style. Generally has a light body, almost always lighter than what might be expected from the base style. Generally moderate to high carbonation, although often lower in higher alcohol examples.',
          comments:
            'The base beer style becomes less relevant in this style because the various yeast and bacteria tend to dominate the profile. Bitterness is often reserved since bitter and sour flavors clash on the palate. Inappropriate characteristics include diacetyl, solvent, ropy or viscous texture, and heavy oxidation.',
          history:
            'Modern American craft beer interpretations of Belgian sour ales, or experimentations inspired by Belgian sour ales.',
          characteristicIngredients:
            'Virtually any style of beer. Usually fermented by some combination of Lacto, Pedio, Sacch, and Brett. Can also be a blend of styles. Wood or barrel aging is very common, but not required; if present, should not be a primary or dominant flavor.',
          styleComparison:
            'A sour and funky version of a base style, but do not necessarily have to be as sour or as funky as some traditional European sour examples.',
          entryInstructions:
            'The entrant must specify a description of the beer, identifying yeast or bacteria used and either a Base Style, or the ingredients, specs, or target character of the beer.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'Boulevard Love Child, Jester King Le Petit Prince, Jolly Pumpkin Oro de Calabaza, Lost Abbey Ghosts in the Forest, New Belgium Le Terroir, Russian River Temptation',
          tags: 'wild-fermentation, north-america, craft-style, specialty-beer, sour',
        },
        description:
          'Intended for beer fermented with any combination of Sacch, Lacto, Pedio, and Brett (or additional yeast or bacteria), with or without oak aging (except if the beer fits instead in 28A or 28D).\n',
      },
      {
        title: '28C. Wild Specialty Beer',
        properties: {
          overallImpression: 'An American Wild Ale with fruit, herbs, spices, or other Specialty-Type Ingredients.',
          aroma:
            'Variable by base style. The Specialty-Type Ingredients should be evident, as well as the defining characteristics of a wild fermentation per the base style. The best examples will blend the aromatics from the fermentation with the special ingredients, creating an aroma that may be difficult to attribute precisely.',
          appearance:
            'Variable by base style, generally showing a color, tint, or hue from any Specialty-Type Ingredient (especially if fruit is used) in both the beer and the head. Clarity can be variable; some haze is not a fault. Head retention is often poor.',
          flavor:
            'Variable by base style. The Specialty-Type Ingredients should be evident, as well as the defining characteristics of a wild fermentation per the base style. If fruit was fermented, the sweetness is generally gone so that only the fruit esters typically remain. Fruit and other Specialty-Type Ingredients can add sourness of their own; if so, the sourness could be prominent, but should not be overwhelming. The acidity and tannin from any fruit or other Specialty-Type Ingredients can both enhance the dryness of the beer, so care must be taken with the balance. The acidity should enhance the perception of any fruit flavor, not detract from it. Wood notes, if present, add flavor but should be balanced.',
          mouthfeel:
            'Variable by base style. Generally has a light body, lighter than what might be expected from the base style. Generally moderate to high carbonation; carbonation should balance the base style if one is declared. The presence of tannin from some Specialty-Type ingredients (often fruit or wood) can provide a slight astringency, enhance the body, or make the beer seem drier than it is.',
          comments:
            'This style is intended for fruited (and other added Specialty-Type Ingredient) versions of other styles within Category 28, not variations of European wild or sour Classic Styles. Fruited versions of Lambic should be entered in 23F Fruit Lambic. Fruited versions of other sour Classic Styles (e.g., Flanders Red, Oud Bruin, Gose, Berliner Weisse) should be entered in 29A Fruit Beer. Beers with sugars and unfermented fruit added post-fermentation should be entered in 29C Specialty Fruit Beer.',
          history:
            'Modern American craft beer interpretations of Belgian wild ales, or experimentations inspired by Belgian wild ales.',
          characteristicIngredients:
            'Virtually any style of beer. Any combination of Sacch, Brett, Lacto, Pedio, or other similar fermenters. Can also be a blend of styles. While cherries, raspberries, and peaches are most common, other fruits can be used as well. Vegetables with fruit-like characteristics (e.g., chile, rhubarb, pumpkin) may also be used. Wood or barrel aging is very common, but not required. Wood with unusual or unique flavor characteristics, or wood previously in contact with other types of alcohol is allowable.',
          styleComparison: 'Like a fruit, herb, spice, or wood beer, but sour or funky.',
          entryInstructions:
            'Entrant must specify any Specialty-Type Ingredient (e.g., fruit, spice, herb, or wood) used. Entrant must specify either a description of the beer, identifying yeast or bacteria used and either a Base Style, or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'Cascade Bourbonic Plague, Jester King Atrial Rubicite, New Belgium Dominga Mimosa Sour, New Glarus Wisconsin Belgian Red, Russian River Supplication, The Lost Abbey Cuvee de Tomme',
          tags: 'wild-fermentation, north-america, craft-style, specialty-beer, sour, fruit',
        },
        description:
          'Intended for variations of a Base Style beer from style 28A, 28B, or 28D. These variations may include the addition of one or more Specialty-Type Ingredients; aging in non-traditional wood varieties that impart a significant and identifiable wood character (e.g., Spanish Cedar, Amburana); or aging in barrels previously containing another alcohol (e.g., spirits, wine, cider).\n',
      },
      {
        title: '28D. Straight Sour Beer',
        properties: {
          overallImpression:
            'A pale, refreshing, sour beer with a clean lactic sourness. A gentle, pale malt flavor supports the lemony sourness with moderate fruity esters.',
          aroma:
            'A sharply sour character is dominant (moderately-high to high). Can have up to a moderately fruity character (often peach, apricot, lemon, or tart apple). No hop aroma. Supportive pale malt dominates, usually biscuity or crackery. Clean fermentation.',
          appearance:
            'Very pale in color. Clarity ranges from clear to somewhat hazy. Large, dense, white head with poor retention. Effervescent.',
          flavor:
            'Clean lactic sourness dominates and can be quite strong. Some complementary, bready, biscuit, crackery, or grainy flavor is generally noticeable. Hop bitterness is undetectable. Never vinegary or bitingly acidic. Pale fruit character can be moderate including a citrusy-lemony or tart apple fruitiness may be detected. Finish is off-dry to dry. Balance dominated by sourness, but some malt and estery fruit flavor should be present. No hop flavor. Clean.',
          mouthfeel:
            'Light body. Moderate to high carbonation. Never hot, although higher gravity examples can have a warming alcohol character. Crisp acidity.',
          comments:
            'A stronger version of a Berliner Weisse-type beer with less restrictive grist, and no Brett. This beer style is typically are used as a base for modern beers that are heavily flavored with fruit, spices, sugars, etc. - those should be entered in 28C Wild Specialty Beer.',
          history:
            'German brewing scientist, Otto Francke, developed what was to become known as the Francke acidification process which allowed the traditional mixed-culture Berliner Weiss methods to be sped up and more consistent; this is also known as kettle souring. Many modern commercial sour beer examples use this method for rapid production, and as an alternative to complex barrel production.',
          characteristicIngredients:
            'Most or all of the grist is pale, Pils, or wheat malt in any combination. Lightly-kilned malts for more malt depth may be employed. Carapils-type malts can be used for body. Pale sugars can be used to increase gravity without body. No lactose or maltodextrin. May be produced by kettle souring, co-fermentation culture (yeast and LAB), or using specialty yeast that produce lactic acid. No Brett.',
          styleComparison:
            'Lower gravity examples can be very much like a Brett-free Berliner Weisse. Compared to a Lambic, is generally not as acidic and has a clean lactic sourness with restrained to below sensory threshold funk. Higher in alcohol content than both.',
          vitalStatistics: {
            OG: [1.048, 1.065],
            IBUs: [3, 8],
            FG: [1.006, 1.013],
            SRM: [2, 3],
            ABV: [4.5, 7],
          },
          commercialExamples: 'Rarely found, as this style is typically the base for other Specialty-Type Beers.',
          tags: 'pale-color, top-fermented, sour',
        },
        description:
          'Intended for beers fermented with Sacch and Lacto, with or without oak aging, produced using any technique (e.g., traditional co-fermentation, quick kettle souring).\n',
      },
    ],
  },
  {
    title: '29. Fruit Beer',
    description:
      "The Fruit Beer category is for beer made with any fruit or combination of fruit under the definitions of this category. The culinary, not botanical, definition of fruit is used here - fleshy, seed-associated structures of plants that are sweet or sour, and edible in the raw state. Examples include pome fruit (apple, pear, quince), stone fruit (cherry, plum, peach, apricot, mango, etc.), berries (any fruit with the word 'berry' in it), currants, citrus fruit, dried fruit (dates, prunes, raisins, etc.), tropical fruit (banana, pineapple, mango, guava, passionfruit, papaya, etc.), figs, pomegranate, prickly pear, and so on. It does not mean spices, herbs, or vegetables as defined in Category 30 - especially botanical fruit treated as culinary vegetables. Basically, if you have to justify a fruit using the word \"technically\" as part of the description, then that's not what we mean.\nSee the Introduction to Specialty-Type Beer section for additional comments, particularly on evaluating the balance of added ingredients with the base beer.",
    styles: [
      {
        title: '29A. Fruit Beer',
        properties: {
          overallImpression:
            'A pleasant integration of fruit with beer, but still recognizable as beer. The fruit character should be evident but in balance with the beer, not so forward as to suggest an artificial product.',
          aroma:
            'Varies by base style. The fruit character should be noticeable in the aroma; however, some fruit (e.g., raspberries, cherries) have stronger aromas and are more distinctive than others (e.g., blueberries, strawberries) - allow for a range of fruit character and intensities from subtle to aggressive. Hop aroma may be lower than in the base style to better show the fruit character. The fruit should add an extra complexity, but not be so prominent as to unbalance the resulting presentation.',
          appearance:
            'Varies by base style and special ingredients. Lighter-colored beer should show distinctive ingredient colors, including in the head. The color of fruit in beer is often lighter than the flesh of the fruit itself and may take on slightly different shades. Variable clarity, although haze is generally undesirable. Some ingredients may impact head retention.',
          flavor:
            "Varies by base style. As with aroma, distinctive fruit flavors should be noticeable, and may range in intensity from subtle to aggressive, but the fruit character should not be so artificial or inappropriately overpowering as to suggest a 'fruit juice drink.' Bitterness, hop and malt flavors, alcohol content, and fermentation byproducts, such as esters, should be appropriate for the base style, but be harmonious and balanced with the distinctive fruit flavors present.\nFruit generally adds flavor not sweetness, since fruit sugars usually fully ferment, thus lightening the flavor and drying out the finish. However, residual sweetness is not necessarily a negative characteristic unless it has a raw, unfermented quality. Some fruit may add sourness, bitterness, and tannins, which must be balanced in the resulting flavor profile.",
          mouthfeel:
            'Varies by base style. Fruit often decreases body, and makes the beer seem lighter on the palate. Some smaller and darker fruits may add a tannic depth, but this astringency should not overwhelm the base beer.',
          comments:
            "The description of the beer is critical for evaluation; judges should think more about the declared concept than trying to detect each individual ingredient. Balance, drinkability, and execution of the theme are the most important deciding factors.\nThe fruit should complement the original style and not overwhelm it. Base style attributes will be different after the addition of fruit; do not expect the beer to taste identical to the unadulterated base style.\nFruit Beers based on a Classic Style should be entered in this style, except Lambic - there is a special style for Fruit Lambic (23F). Fruited sour or mixed fermentation beers without a Classic Style base should be entered in the 28C Wild Specialty Beer. Fruited versions of sour Classic Style beers (e.g., Flanders Red, Oud Bruin, Gose, Berliner Weisse) should be entered in 29A Fruit Beer. Fruit-based versions of Classic Styles where spices are an inherent part of the Classic Style's definition (e.g., Witbier, Gose) do not count as a Spice Beer for entering purposes.",
          entryInstructions:
            'The entrant must specify the type(s) of fruit used. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "21st Amendment Watermelon Wheat, Anderson Valley Blood Orange Gose, Avery Liliko'i Kepolo, Ballast Point Grapefruit Sculpin, Bell's Cherry Stout, Founders Rübæus",
          tags: 'specialty-beer, fruit',
        },
      },
      {
        title: '29B. Fruit and Spice Beer',
        properties: {
          overallImpression:
            'A tasteful union of fruit, spice, and beer, but still recognizable as beer. The fruit and spice character should each be evident but in balance with the beer, not so forward as to suggest an artificial product.',
          aroma:
            'Varies by base style. The fruit and spice character should be noticeable in the aroma; however, note that some fruit and spices (e.g., raspberries, cherries, cinnamon, ginger) have stronger aromas and are more distinctive than others (e.g., blueberries, strawberries) - allow for a range of fruit and spice character and intensity from subtle to aggressive. Hop aroma may be lower than in the base style to better show the specialty character. The specialty ingredients should add an extra complexity, but not be so prominent as to unbalance the resulting presentation.',
          appearance:
            'Varies by base style and special ingredients. Lighter-colored beer should show distinctive ingredient colors, including in the head. The color of fruit in beer is often lighter than the flesh of the fruit itself and may take on slightly different shades. Variable clarity, although haze is generally undesirable. Some ingredients may impact head retention.',
          flavor:
            'Varies by base style. As with aroma, distinctive fruit and spice flavors should be noticeable, and may range in intensity from subtle to aggressive. The fruit character should not be so artificial or inappropriately overpowering as to suggest a spiced fruit juice drink. Hop bitterness, flavor, malt flavors, alcohol content, and fermentation byproducts, such as esters, should be appropriate to the base style, but be harmonious and balanced with the distinctive fruit and spice flavors present.\nFruit generally add flavor not sweetness, since fruit sugars usually fully ferment, thus lightening the flavor and drying out the finish. However, residual sweetness is not necessarily a negative characteristic unless it has a raw, unfermented quality. Some ingredients may add sourness, bitterness, and tannins, which must be balanced in the resulting flavor profile.',
          mouthfeel:
            'Varies by base style. Fruit often decreases body, and makes the beer seem lighter on the palate. Some smaller and darker fruits may add a tannic depth, but this astringency should not overwhelm the base beer. SHVs may increase or decrease body. Some SHVs may add a bit of astringency, although a "raw" spice character is undesirable.',
          comments:
            'The description of the beer is critical for evaluation; judges should think more about the declared concept than trying to detect each individual ingredient. Balance, drinkability, and execution of the theme are the most important deciding factors.\nThe specialty ingredients should complement the original style and not overwhelm it. Base style attributes will be different after the addition of fruit and spices; do not expect the beer to taste identical to the unadulterated base style.',
          entryInstructions:
            'The entrant must specify the type of fruit, and the type of SHV used; individual SHV ingredients do not need to be specified if a well-known blend of spices is used (e.g., apple pie spice). Entrant must specify a description of the beer, either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'Cigar City Margarita Gose, Firestone Walker Chocolate Cherry Stout, Golden Road Spicy Mango Cart, Kona Island Colada Cream Ale, New Glarus Blueberry Cocoa Stout, Sun King Orange Vanilla Sunlight',
          tags: 'specialty-beer, fruit, spice',
        },
        description:
          "Use the definitions of Fruit in the preamble to Category 29 and Spice in the preamble to Category 30; any combination of ingredients valid in Styles 29A and 30A are allowable in this category. For this style, the word 'spice' means 'any SHV'.\n",
      },
      {
        title: '29C. Specialty Fruit Beer',
        properties: {
          overallImpression:
            'A appealing combination of fruit, sugar, and beer, but still recognizable as a beer. The fruit and sugar character should both be evident but in balance with the beer, not so forward as to suggest an artificial product.',
          aroma:
            'Same as Fruit Beer, except that some additional fermentables (e.g., honey, molasses) may add an aroma component. Whatever additional aroma component is present should be in balance with the fruit and the beer components, and be a pleasant combination.',
          appearance: 'Same as Fruit Beer.',
          flavor:
            'Same as Fruit Beer, except that some additional fermentables (e.g., honey, molasses) may add a flavor component. Whatever additional flavor component is present should be in balance with the fruit and the beer components, and be a pleasant combination. Added sugars should not have a raw, unfermented flavor. Some added sugars will have unfermentable elements that may provide a fuller and sweeter finish; fully fermentable sugars may thin out the finish.',
          mouthfeel:
            'Same as Fruit Beer, although depending on the type of sugar added, could increase or decrease the body.',
          comments:
            'If the additional fermentables or processes do not add a distinguishable character to the beer, enter it as one of the other (non-Specialty) Fruit Beer styles and omit a description of the extra ingredients or processes.',
          entryInstructions:
            'The entrant must specify the type of fruit used. The entrant must specify the type of additional ingredient (per the introduction) or special process employed. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'The Bruery Goses are Red, New Planet Raspberry Ale, Tired Hands Strawberry Milkshake IPA, WeldWerks Piña Colada IPA',
          tags: 'specialty-beer, fruit',
        },
        description:
          'A Specialty Fruit Beer is a Fruit Beer with some additional ingredients, such as fermentable sugars (e.g., honey, brown sugar, invert sugar), sweeteners (e.g., lactose), adjuncts, alternative grains, or other special ingredients added, or some additional process applied. A Specialty Fruit Beer can use any style within the Fruit Beer category as a base style (currently, 29A, 29B, or 29D).\n',
      },
      {
        title: '29D. Grape Ale',
        properties: {
          overallImpression:
            'Combines the profile of a sparkling wine and a relatively neutral base beer allowing the aromatic qualities of the grape to blend pleasantly with hop and yeast aromatics. Can be in a range from refreshing to complex.',
          aroma:
            'Aromatic characteristics of the varietal grape are noticeable but should not dominate. The grape character should meld well with the underlying base malt character. While hop aroma is usually restrained, it can range from medium-low to entirely absent. Fermentation is usually quite clean but can have delicate spice and fruity esters. Banana, bubblegum, and the like are considered faults.',
          appearance:
            'Color can range from pale golden to ruby but those using red grapes tend towards burgundy. These darker colors may also come from using cooked or concentrated grape products, never from specialty dark grains. White to reddish head with generally a medium-low retention. Clarity is generally good. Never hazy.',
          flavor:
            "As with the aroma, grape character may range from subtle to medium-high intensity, and be most prominent. Fruit flavors (stone, tropical, berries, etc.) as appropriate for the variety of grape. Darker red grapes can contribute more rustic flavors (e.g., earthy, tobacco, leather). The malt character is supportive, not robust and usually of the pale, lightly kilned varieties. Very low levels of pale crystal malts are allowed but roasted or strong chocolate character is always inappropriate. Bitterness is generally low and hop flavors can be low to non-existent. Mild tart notes, due to variety and amount of grape used, is common and may help to improve the digestibility but should not near 'sour' threshold. Complementary oak is optional but a funky Brett character should not be present. Clean fermentation.",
          mouthfeel:
            'Medium-high to high carbonation improves the perception of aroma. Body is generally from low to medium and some acidity can contribute to increased perception of dryness. Finish is exceedingly dry and crisp. Strong examples may show some warming.',
          comments:
            'Strengths can be as low as 4.5% or as high as 12.5%, but most commonly in the range listed. Perception of color varies widely based on tint of added fruit.',
          history:
            'Initially brewed at Birrificio Montegioco and Birrificio Barley in 2006-2007. Became more popular after being published in the 2015 Guidelines as Italian Grape Ale (IGA), and inspired many local variations in other countries.',
          characteristicIngredients:
            'Pils or pale base malt, limited pale crystal or wheat malts. Grape must (red or white varieties, typically fresh must) is usually 15 - 20% of the total grist, but can exceed 40%. The must is fermented with the beer, not a blending of wine and beer. Fruity-spicy yeast are most common but neutral varieties can be used. Hops should be selected to complement the overall profile. This beer is not dry-hopped. Oak is allowable, but not required, and it should not be overpowering, or at levels stronger than found in wine.',
          styleComparison:
            'Similar base as several Belgian styles, like Belgian Blonde, Saison, and Belgian Single, but with grapes. Higher strength examples are similar to Belgian Tripel or Belgian Golden Strong Ale, but with grapes. Not funky like Fruit Lambic.',
          entryInstructions:
            'The entrant must specify the type of grape used. The entrant may provide additional information about the base style or characteristic ingredients.',
          vitalStatistics: {
            OG: [1.059, 1.075],
            IBUs: [10, 30],
            FG: [1.004, 1.013],
            SRM: [4, 8],
            ABV: [6, 8.5],
          },
          commercialExamples:
            'Montegioco Open Mind, Birrificio del Forte Il Tralcio, Luppolajo Mons Rubus, Firestone Walker Feral Vinifera, pFriem Family Brewers Druif, 4 Árvores Abbondanza',
          tags: 'specialty-beer, fruit',
        },
        description:
          'Originally a local Italian style that subsequently inspired brewers in grape-growing regions worldwide to produce versions showcasing local varietals. See X3 Italian Grape Ale for the local version.\n',
      },
    ],
  },
  {
    title: '30. Spiced Beer',
    description:
      "We use the common or culinary definitions of spices, herbs, and vegetables, not botanical or scientific ones. In general, spices are the dried seeds, seed pods, fruit, roots, bark, etc. of plants used for flavoring food. Herbs are leafy plants or parts of plants (leaves, flowers, petals, stalks) used for flavoring food. Vegetables are savory or less sweet edible plant products, used primarily for cooking or sometimes eating raw. Vegetables can include some botanical fruit. This category explicitly includes all culinary spices, herbs, and vegetables, as well as nuts (or anything with 'nut' in the name, including coconut), chile peppers, coffee, chocolate, spruce tips, rose hips, hibiscus, fruit peels/zest (but not juice), rhubarb, and the like. It does not include culinary fruit or grains. Flavorful fermentable sugars and syrups (e.g., agave nectar, maple syrup, molasses, sorghum, treacle, honey) or sweeteners (e.g., lactose) can be included only in combination with other allowable ingredients, and should not have a dominant character. Any combination of allowable ingredients may also be entered.\nSee Category 29 for a definition and examples of fruit. See the Introduction to Specialty-Type Beer section for additional comments, particularly on evaluating the balance of added ingredients with the base beer.",
    styles: [
      {
        title: '30A. Spice, Herb, or Vegetable Beer',
        properties: {
          overallImpression:
            'An appealing fusion of spices, herbs, or vegetables (SHVs) and beer, but still recognizable as beer. The SHV character should be evident but in balance with the beer, not so forward as to suggest an artificial product.',
          aroma:
            'Varies by base style. The SHV character should be noticeable in the aroma; however, some SHVs (e.g., ginger, cinnamon, rosemary) have stronger aromas and are more distinctive than others (e.g., most vegetables) - allow for a range of SHV character and intensity from subtle to aggressive. Hop aroma may be lower than in the base style to better show the SHV character. The SHVs should add an extra complexity, but not be so prominent as to unbalance the resulting presentation.',
          appearance:
            'Varies by base style and special ingredients. Lighter-colored beer may show distinctive ingredient colors, including in the head. Variable clarity, although haze is generally undesirable. Some ingredients may impact head retention.',
          flavor:
            'Varies by base style. As with aroma, distinctive SHV flavors should be noticeable, and may range in intensity from subtle to aggressive. Some SHVs are inherently bitter and may result in a beer more bitter than the declared base style. Bitterness, hop and malt flavors, alcohol content, and fermentation byproducts, such as esters, should be appropriate for the base style, but be harmonious and balanced with the distinctive SHV flavors present.',
          mouthfeel:
            'Varies by base style. SHVs may increase or decrease body. Some SHVs may add a bit of astringency, although a "raw" spice character is undesirable.',
          comments:
            'The description of the beer is critical for evaluation; judges should think more about the declared concept than trying to detect each individual ingredient. Balance, drinkability, and execution of the theme are the most important deciding factors.\nThe SHVs should complement the original style and not overwhelm it. Base style attributes will be different after the addition of SHVs; do not expect the beer to taste identical to the unadulterated base style.',
          entryInstructions:
            'The entrant must specify the type of spices, herbs, or vegetables used, but individual ingredients do not need to be specified if a well-known spice blend is used (e.g., apple pie spice, curry powder, chili powder). Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "Alesmith Speedway Stout, Elysian Avatar Jasmine IPA, Founders Breakfast Stout, Rogue Yellow Snow Pilsner, Traquair Jacobite Ale, Young's Double Chocolate Stout",
          tags: 'specialty-beer, spice',
        },
        description: 'Often called Spice Beer, regardless of whether spices, herbs, or vegetables are used.\n',
      },
      {
        title: '30B. Autumn Seasonal Beer',
        properties: {
          overallImpression:
            'A malty, spiced beer that often has a moderately rich body and slightly warming finish suggesting a good accompaniment for the cool fall season, and often evocative of harvest or Thanksgiving traditions.',
          aroma:
            'Malty, spicy, and balanced. A wide range is possible, as long as it evokes the harvest theme. The declared ingredients and concept set the expectation. Hops are often subtle. Alcohol is often present, but smooth and supportive. The components should be well-integrated, and create a coherent presentation. See Flavor section for spice, malt, sugar, and vegetable character.',
          appearance:
            'Medium amber to coppery-brown; lighter versions are more common. Clear, if not opaque. Well-formed, persistent, off-white to tan head. Some versions with squashes will take on an unusual hue for beer, with orange-like hints.',
          flavor:
            'Malty, spicy, and balanced. Allow for brewer creativity in meeting the theme objective. Warming or sweet spices common. Rich, toasty malty flavors are common, and may include caramel, toasted bread or pie crust, biscuit, or nut flavors. May include distinctive sugar flavors, like molasses, honey, or brown sugar. Flavor derived from squash-based vegetables are often elusive, often only providing a richer sweetness.\nThe special ingredients should be supportive and balanced, not overshadowing the base beer. Bitterness and hop flavor are usually restrained to not interfere with the special character. Usually finishes somewhat full and satisfying, occasionally with a light alcohol flavor. Roasted malt characteristics are typically absent.',
          mouthfeel:
            'Body is usually medium to full, and may be chewy. Moderately low to moderately high carbonation. Age character allowable. Warming alcohol allowable.',
          comments:
            'Using the sensory profile of products that suggest the harvest season, like pumpkin pie, apple pie, or candied yams, balanced with a supportive, often malty base beer. The description of the beer is critical for evaluation; judges should think more about the declared concept than trying to detect each individual ingredient. Balance, drinkability, and execution of the theme are the most important deciding factors.',
          characteristicIngredients:
            'Spices are required, and often include those evocative of the fall, harvest, or Thanksgiving season (e.g., allspice, nutmeg, cinnamon, cloves, ginger) but any combination is possible and creativity is encouraged. Flavorful adjuncts are common (e.g., molasses, invert sugar, brown sugar, honey, maple syrup). Squash-type or gourd-type vegetables (most frequently pumpkin) are often used.',
          entryInstructions:
            'The entrant must specify the type of spices, herbs, or vegetables used; individual ingredients do not need to be specified if a well-known blend of spices is used (e.g., pumpkin pie spice). Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            'Dogfish Head Punkin Ale, Elysian Punkuccino, Rogue Pumpkin Patch Ale, Schlafly Pumpkin Ale, UFO Pumpkin, Weyerbacher Imperial Pumpkin',
          tags: 'specialty-beer, spice',
        },
        description:
          'Autumn Seasonal Beers are beers that suggest cool weather and the autumn harvest season, and may include pumpkins, gourds, or other squashes, and associated spices.\n',
      },
      {
        title: '30C. Winter Seasonal Beer',
        properties: {
          overallImpression:
            'A stronger, darker, spiced beer that often has a rich body and warming finish suggesting a good accompaniment for the cold winter season.',
          aroma:
            'Malty, spicy, fruity, and balanced. A wide range is possible, as long as it evokes the holiday theme. The declared ingredients and concept set the expectation. Fruit is often dark or dried in character. Hops are often subtle. Alcohol is often present, but smooth and supportive. Malty and sugary aromas tend to be greater in the balance, and support the spices. The components should be well-integrated, and create a coherent presentation. See Flavor section for spice, malt, sugar, and fruit character.',
          appearance:
            'Medium amber to very dark brown; darker versions are more common. Clear, if not opaque. Usually clear, although darker versions may be virtually opaque. Well-formed, persistent, off-white to tan head.',
          flavor:
            'Malty, spicy, fruity, and balanced. Allow for brewer creativity in meeting the theme objective. Warming or sweet spices common. Rich, sweet malty flavors are common, and may include caramel, toast, nutty, or chocolate flavors. May include dried fruit or dried fruit peel flavors such as raisin, plum, fig, cherry, orange peel, or lemon peel. May include distinctive sugar flavors, like molasses, honey, or brown sugar.\nThe special ingredients should be supportive and balanced, not overshadowing the base beer. Bitterness and hop flavor are usually restrained to not interfere with special character. Usually finishes rather full and satisfying, often with a light alcohol flavor. Roasted malt characteristics are rare, and not usually stronger than chocolate.',
          mouthfeel:
            'Body is usually medium to full, often with a malty chewiness. Moderately low to moderately high carbonation. Age character allowable. Warming alcohol allowable.',
          comments:
            'Using the sensory profile of products that suggest the holiday season, such as Christmas cookies, gingerbread, English-type Christmas pudding, rum cakes, eggnog, evergreen trees, potpourri, or mulling spices, balanced with a supportive, often malty, warming, and darker base beer. The description of the beer is critical for evaluation; judges should think more about the declared concept than trying to detect each individual ingredient. Balance, drinkability, and execution of the theme are the most important deciding factors.',
          history:
            'The winter holiday season is a traditional time when old friends get together, where beer of a somewhat higher alcohol content and richness is served. Many breweries offer seasonal products that may be darker, stronger, spiced, or otherwise more characterful than their year-round beers. Spiced versions are an American or Belgian tradition, since English or German breweries traditionally do not use spices in their beer. Many American craft examples were inspired by Anchor Our Special Ale, first produced in 1975.',
          characteristicIngredients:
            'Spices are required, and often include those evocative of the Christmas season (e.g., allspice, nutmeg, cinnamon, cloves, ginger) but any combination is possible and creativity is encouraged. Fruit peel (e.g., oranges, lemon) may be used, as may subtle additions of other fruits (often dried or dark fruit). Flavorful adjuncts are often used (e.g., molasses, treacle, invert sugar, brown sugar, honey, maple syrup). Usually ales, although strong dark lagers exist.',
          entryInstructions:
            'The entrant must specify the type of spices, sugars, fruits, or additional fermentables used; individual ingredients do not need to be specified if a well-known blend of spices is used (e.g., mulling spice). Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "Anchor Christmas Ale, Great Lakes Christmas Ale, Harpoon Winter Warmer, Rogue Santa's Private Reserve, Schlafly Christmas Ale, Troeg's The Mad Elf",
          tags: 'specialty-beer, spice',
        },
        description:
          'Winter Seasonal Beers are beers that suggest cold weather and the Christmas holiday season, and may include holiday spices, specialty sugars, and other products that are reminiscent of the festive season.\n',
      },
      {
        title: '30D. Specialty Spice Beer',
        properties: {
          overallImpression:
            'An appealing combination of spices, herbs, or vegetables (SHVs), sugars, and beer, but still recognizable as beer. The SHV and sugar character should both be evident but in balance with the beer, not so forward as to suggest an artificial product.',
          aroma:
            'Same as SHV Beer, except that some additional fermentables (e.g., honey, molasses) may add an aroma component. Whatever additional aroma component is present should be in balance with the SHV and the beer components, and be a pleasant combination.',
          appearance: 'Same as Spice, Herb, or Vegetable Beer.',
          flavor:
            'Same as SHV Beer, except that some additional fermentables (e.g., honey, molasses) may add a flavor component. Whatever additional flavor component is present should be in balance with the SHV and the beer components, and be a pleasant combination. Added sugars should not have a raw, unfermented flavor. Some added sugars will have unfermentable elements that may provide a fuller and sweeter finish; fully fermentable sugars may thin out the finish.',
          mouthfeel:
            'Same as SHV Beer, although depending on the type of sugar added, could increase or decrease the body.',
          comments:
            'If the additional fermentables or processes do not add a distinguishable character to the beer, enter it as one of the other (non-Specialty) Spiced Beer styles and omit a description of the extra ingredients or processes.',
          entryInstructions:
            'The entrant must specify the type of SHVs used, but individual ingredients do not need to be specified if a well-known spice blend is used (e.g., apple pie spice, curry powder, chili powder). The entrant must specify the type of additional ingredient (per the introduction) or special process employed. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples: "New Belgium Honey Orange Tripel, Westbrook It's Tiki Time",
          tags: 'specialty-beer, spice',
        },
        description:
          'A Specialty Spice Beer is a 30A Spice, Herb, or Vegetable (SHV) Beer with some additional ingredients, such as fermentable sugars (e.g., honey, brown sugar, invert sugar, maple syrup), sweeteners (e.g., lactose), adjuncts, alternative grains, or other special ingredients added, or some additional process applied. 30B Autumn and 30C Winter Seasonal Beers already allow additional ingredients, and should not be used as a base in this style.\n',
      },
    ],
  },
  {
    title: '31. Alternative Fermentables Beer',
    description:
      'This category contains Specialty-Type Beers using either grain or sugar to add a distinctive character. See the Introduction to Specialty-Type Beer section for additional comments, particularly on evaluating the balance of added ingredients to the base beer.',
    styles: [
      {
        title: '31A. Alternative Grain Beer',
        properties: {
          overallImpression:
            'A base beer enhanced by or featuring the character of additional grains. The specific character depends greatly on the added grains.',
          aroma:
            'Same as base beer style. The added grain will lend a particular character, although with some grains the beer will simply seem a bit more grainy or nutty, and some may have a relatively neutral character.',
          appearance: 'Same as base beer style, although some additional haze may be noticeable.',
          flavor:
            'Same as base beer style. The additional grain should be noticeable in flavor, although it may not be necessarily identifiable. Some grains add an additional grainy, bready, or nutty flavor, while others simply enhance the flavor of the base beer. Some grains add a dryness to the finish.',
          mouthfeel:
            'Same as the base beer, although many additional grains (e.g., oats, rye) increase body and viscosity, while some (e.g., GF grains) create a thinner beer.',
          comments:
            'The additional grain should be apparent somewhere in the sensory profile. If the alternative grain does not provide a noticeable distinguishable character to the beer, enter it as the base style. This style should not be used for styles where the alternative grain is fundamental to the style definition (e.g., Rye IPA, Oatmeal Stout, Rice- or Corn-based International Lager). Note that sake is not beer, and is not intended for this category.',
          entryInstructions:
            'The entrant must specify the type of alternative grain used. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "Blue/Point Rastafarye Ale, Green's India Pale Ale, Lakefront New Grist, New Planet Pale Ale, Rogue Morimoto Soba Ale, Voodoo Swimming Jeans",
          tags: 'specialty-beer',
        },
        description:
          'An Alternative Grain Beer is a standard beer (Classic Style or not) with additional or non-standard brewing grains (e.g., rye, oats, buckwheat, spelt, millet, sorghum, rice) added or used exclusively. Gluten-free (GF) beers made from completely gluten-free ingredients may be entered here, while GF beers using process-based gluten removal should be entered in their respective base style categories.\n',
      },
      {
        title: '31B. Alternative Sugar Beer',
        properties: {
          overallImpression:
            'A tasteful integration of sugar and beer, but still recognizable as beer. The sugar character should both be evident and in balance with the beer, not so forward as to suggest an artificial product.',
          aroma:
            'Same as the base beer, except that some additional fermentables (e.g., honey, molasses) may add an aroma, which should be a pleasant, balanced combination with the beer.',
          appearance: 'Same as the base beer, although some sugars will bring additional, usually darker, colors.',
          flavor:
            'Same as the base beer, except that some additional fermentables (e.g., honey, molasses) may add a flavor, which should be a pleasant, balanced combination with the beer. Added sugars should not have a raw, unfermented flavor. Some unfermentable sugars provide a fuller finish, while fully fermentable sugars can thin out the finish.',
          mouthfeel:
            'Same as the base beer, although depending on the type of sugar added, could increase or decrease the body.',
          comments:
            'The additional sugar should be apparent somewhere in the sensory profile. If the sugars do not add a distinguishable character to the beer, enter it in the base style category. A honey-based beer should not have so much honey that it is perceived more like a mead with beer (i.e., a braggot) than a honey beer. This style should not be used for styles where the alternative sugar is fundamental to the style definition, or where a small amount of neutral-flavored sugar is used simply to increase gravity, increase attenuation, or lighten flavor or body; those beers should be entered as the normal base style.',
          entryInstructions:
            'The entrant must specify the type of sugar used. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "Bell's Hopslam, Cervejaria Colorado Appia, Fifth Hammer Break of Jawn, Groundswell Piloncillo, Long Trail Harvest, New Glarus Cabin Fever",
          tags: 'specialty-beer',
        },
        description:
          'An Alternative Sugar Beer is a standard beer (Classic Style or not) with added sweeteners, including fermentable sugars (e.g., honey, brown sugar, invert sugar, molasses, treacle, maple syrup, sorghum), unfermentable sugars (e.g., lactose), sugar alcohols (e.g., sorbitol), and any other sweetener (natural or artificial) that affects the flavor profile. The beers may or may not have any residual sweetness; it depends on the type of sugar, but flavor contributions are expected.\n',
      },
    ],
  },
  {
    title: '32. Smoked Beer',
    description: 'This category contains Specialty-Type Beers that have a smoke character.',
    styles: [
      {
        title: '32A. Classic Style Smoked Beer',
        properties: {
          overallImpression:
            'A well-balanced fusion of the malt and hops of the base beer style with a pleasant and agreeable smoke character.',
          aroma:
            'A pleasant balance between the expected aroma of the base beer and smoked malt. The smoke character ranges from low to assertive, and may show varietal wood smoke character (e.g., alder, oak, beechwood). The balance between the smoke and beer can vary - they do not need to be equal in intensity. However, the resulting mix should be appealing. Sharp, phenolic, harsh, rubbery, or burnt smoke-derived aromatics are inappropriate.',
          appearance:
            'Variable. The appearance should reflect the base beer style, although the color is often a bit darker than expected for the plain base style.',
          flavor:
            'Similar to the aroma, with a balance between the base beer and low to assertive smoked malt. Varietal woods can produce different flavor profiles. The balance between smoke and beer can vary, but the resulting blend should be enjoyable. Smoke can add some additional dryness to the finish. Harsh, bitter, burnt, charred, rubbery, sulfury, medicinal, or phenolic smoke-derived flavors are inappropriate.',
          mouthfeel:
            'Varies with the base beer style. Significant astringent, phenolic, smoke-derived harshness is a fault.',
          comments:
            'Use this style for beers other than Bamberg-style Rauchbier (i.e., beechwood-smoked Märzen), which has its own style. Judges should evaluate these beers mostly on the overall balance, and how well the smoke character enhances the base beer.',
          history:
            'The process of using smoked malts has been adapted by craft brewers to many styles. German brewers have traditionally used smoked malts in Bock, Doppelbock, Weissbier, Munich Dunkel, Schwarzbier, Munich Helles, Pils, and other specialty styles.',
          characteristicIngredients:
            'Different materials used to smoke malt result in unique flavor and aroma characteristics. Beechwood, or other hardwood (e.g., oak, maple, mesquite, alder, pecan, apple, cherry, other fruitwoods) smoked malts may be used. These may be reminiscent of certain smoked foods (e.g., hickory with ribs, maple with bacon or sausage, and alder with salmon). Evergreen wood should never be used since it adds a medicinal, piney flavor to the malt. Noticeable peat-smoked malt is universally undesirable due to its sharp, piercing phenols and dirt-like earthiness. The remaining ingredients vary with the base style. If smoked malts are combined with other unusual ingredients (e.g., fruits, vegetables, spices, honey) in noticeable quantities, the resulting beer should be entered in the 32B Specialty Smoked Beer.',
          entryInstructions:
            'The entrant must specify a Base Style. The entrant must specify the type of wood or smoke if a varietal smoke character is noticeable.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "Alaskan Smoked Porter, Schlenkerla Oak Smoke Doppelbock, Schlenkerla Rauchbier Weizen, Schlenkerla Rauchbier Ur-Bock, O'Fallon Smoked Porter, Spezial Rauchbier Lagerbier",
          tags: 'specialty-beer, smoke',
        },
        description:
          'Intended for smoked versions of Classic Style beers, except if the Classic Style beer has smoke as an inherent part of its definition (of course, that beer should be entered in its base style, such as Rauchbier).\n',
      },
      {
        title: '32B. Specialty Smoked Beer',
        properties: {
          overallImpression:
            'A well-balanced fusion of the malt and hops of the base specialty beer style with a pleasant and agreeable smoke character.',
          aroma:
            'A pleasant balance between the expected aroma of the base beer, smoked malt, and any specialty ingredients. The smoke character ranges from low to assertive, and may show varietal wood smoke character (e.g., alder, oak, beechwood). The balance between the smoke, the beer, and any specialty ingredients can vary - they do not need to be equal in intensity. However, the resulting mix should be appealing. Sharp, phenolic, harsh, rubbery, or burnt smoke-derived aromatics are inappropriate.',
          appearance:
            'Variable. The appearance should reflect the base beer style, although the color is often a bit darker than expected for the plain base style. The use of certain fruits and spices may affect the color and hue of the beer as well.',
          flavor:
            'Similar to the aroma, with a balance between the base beer, any specialty ingredients, and low to assertive smoked malt. Varietal woods can produce different flavor profiles. The balance between smoke, beer, and any specialty ingredients can vary, but the resulting blend should be enjoyable. Smoke can add some additional dryness to the finish. Harsh, bitter, burnt, charred, rubbery, sulfury, medicinal, or phenolic smoke-derived flavors are inappropriate.',
          mouthfeel:
            'Varies with the base beer style. Significant astringent, phenolic, smoke-derived harshness is a fault.',
          comments:
            'Judges should evaluate these beers mostly on the overall balance, and how well the smoke character enhances the base beer and any specialty ingredients.',
          characteristicIngredients:
            'Same as 32A Classic Style Smoked Beer with the possible addition of specialty ingredients (e.g., fruits, spices, vegetables, honey) in noticeable quantities.',
          entryInstructions:
            'The entrant must specify the type of wood or smoke if a varietal smoke character is noticeable. The entrant must specify the additional ingredients or processes that make this a specialty smoked beer. Entrant must specify a description of the beer, identifying either a base style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples: "Fat Head's Up in Smoke, Ommegang Bourbon Barrel Vanilla Smoked Porter",
          tags: 'specialty-beer, smoke',
        },
        description:
          'A Specialty Smoked Beer is either a smoked beer based on something other than a Classic Style (a Specialty-Type style, or a broad style family such as Porter rather than a specific style), OR any type of smoked beer with additional specialty ingredients (fruits, vegetables, spices) or processes employed that transform the beer into something more unique.\n',
      },
    ],
  },
  {
    title: '33. Wood Beer',
    description:
      'This category contains Specialty-Type Beers with a wood-aged or barrel character, with or without added alcohol character.',
    styles: [
      {
        title: '33A. Wood-Aged Beer',
        properties: {
          overallImpression:
            'A pleasant enhancement of the base beer style with the characteristics from aging in contact with wood. The best examples will be smooth, flavorful, well-balanced, and well-aged.',
          aroma:
            'Varies with base style. A low to moderate woody aroma is usually present; some varietals may have a stronger, or distinctive character. Fresh wood can occasionally impart raw, fresh-cut wood smell, although this character should never be too strong. If the wood is toasted or charred, there may be low to moderate vanilla, caramel, toffee, toast, or cocoa character present.',
          appearance:
            'Varies with base style. Often darker than the unadulterated base beer style, particularly if toasted or charred barrels are used.',
          flavor:
            'Varies with base style. Wood usually contributes a woody flavor, and possibly a distinctive varietal character. New wood may add a raw, fresh-cut wood impression. Toasted or charred wood can add vanilla, caramel, butterscotch, toasted bread, toasted nuts, coffee, chocolate, or cocoa, depending on the wood varietal and level of toast or char. Wood-derived flavors should be balanced, supportive, and noticeable, while not overpowering the base beer style.',
          mouthfeel:
            'Varies with base style. Tannins from the wood may increase the perception of body, as well as enhancing the dryness of the finish; some astringency from wood tannins is allowable. Tart or acidic characteristics should be low to none, and never distracting.',
          comments:
            "Much of the character depends on the type of wood used, and how well it complements and enhances the base style. Age character is allowable, but excessive oxidation or sourness is a fault. Noticeable alcohol is not a fault in stronger base styles.\nThis category should not be used for base styles where wood-aging is a fundamental requirement for the style (e.g., Flanders Red, Lambic). Beers made using either limited wood aging or products that only provide a subtle background character may be entered in the base beer style categories as long as the wood character isn't prominently featured.",
          history:
            'A traditional production method that is rarely used by major breweries, and usually only with specialty products. More popular with modern craft breweries looking for new, distinctive products. Oak cask and barrels are traditional, although other woods are becoming more popular.',
          characteristicIngredients:
            'Varies with base style. Aged in wooden casks or barrels, or using wood-based additives (e.g., chips, staves, spirals, cubes). Fuller-bodied, higher-gravity base styles often are used since they can best stand up to the additional flavors, although experimentation is encouraged.',
          entryInstructions:
            'The entrant must specify the type of wood used and the toast or char level (if used). If an unusual varietal wood is used, the entrant must supply a brief description of the sensory aspects the wood adds to beer. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: 'varies with base style, typically above-average',
            FG: 'varies with base style',
            OG: 'varies with base style, typically above-average',
            IBUs: 'varies with base style',
            SRM: 'varies with base style, often darker than the unadulterated base style',
          },
          commercialExamples:
            'Bush Prestige, Cigar City Spanish Cedar Jai Alai, Firestone Walker Double Barrel Ale, Midnight Sun Arctic Devil, Petrus Aged Pale, Samuel Smith Yorkshire Stingo',
          tags: 'specialty-beer, wood',
        },
        description:
          'This style is intended for beer aged in wood without added alcohol character from previous use of the barrel. Bourbon-barrel or other beers with an added alcohol character should be entered as 33B Specialty Wood-Aged Beer.\n',
      },
      {
        title: '33B. Specialty Wood-Aged Beer',
        properties: {
          overallImpression:
            'An elevation of the base beer style with characteristics from aging in contact with wood, including alcoholic products previously in contact with the wood. The best examples will be smooth, flavorful, well-balanced, and well-aged.',
          aroma:
            'Varies with base style. A low to moderate woody aroma is usually present; some varietals may have a stronger, or distinctive character. If the wood is toasted or charred, there may be low to moderate vanilla, caramel, toffee, toast, or cocoa character present. Aromatics associated with alcohol (e.g., distilled spirits, wine) previously stored in the wood should be noticeable, but balanced.',
          appearance:
            'Varies with base style. Often darker than the unadulterated base beer style, particularly if charred barrels are used. Beers aged in wine barrels or other products with distinctive colors may also impart a color to the finished beer.',
          flavor:
            'Varies with base style. Wood usually contributes a woody flavor, and possibly a distinctive varietal character. Toasted or charred wood can add vanilla, caramel, butterscotch, toasted bread, toasted nuts, coffee, chocolate, or cocoa, depending on the wood varietal and level of toast or char. Wood-derived flavors and added alcohol flavors should be balanced, mutually supportive, and noticeable, while not overpowering the base beer style or each other.',
          mouthfeel:
            'Varies with base style. Tannins from the wood may increase the perception of body, as well as enhancing the dryness of the finish; some astringency from wood tannins is allowable. Usually exhibits additional alcohol warming, but should not be hot or harsh. Tart or acidic characteristics should be low to none, and never distracting.',
          history: 'Same as 33A Wood-Aged Beer.',
          comments:
            'Success in this style depends on how well the wood and alcohol character supports and enhances the base beer, and how well integrated they are with the overall flavor profile. Age character is allowable, but excessive oxidation or sourness is a fault.\nSpecial wood-aged wild ales should be entered in the 28C Wild Specialty Beer.',
          characteristicIngredients:
            'Varies with base style. Aged in wooden casks or barrels previously used to store alcohol (e.g., whiskey, bourbon, rum, gin, tequila, port, sherry, Madeira, wine). Fuller-bodied, higher-gravity base styles often are used since they can best stand up to the additional flavors, although experimentation is encouraged.',
          entryInstructions:
            'The entrant must specify the additional alcohol character, with information about the barrel if relevant to the finished flavor profile. If an unusual wood or ingredient has been used, the entrant must supply a brief description of the sensory aspects the ingredients add to the beer. Entrant must specify a description of the beer, identifying either a Base Style or the ingredients, specs, or target character of the beer. A general description of the special nature of the beer can cover all the required items.',
          vitalStatistics: {
            ABV: 'varies with base style, typically above-average',
            FG: 'varies with base style',
            OG: 'varies with base style, typically above-average',
            IBUs: 'varies with base style',
            SRM: 'varies with base style, often darker than the unadulterated base style',
          },
          commercialExamples:
            "AleSmith Barrel-Aged Old Numbskull, Founders Kentucky Breakfast Stout, Firestone Walker Parabola, Goose Island Bourbon County Stout, Great Divide Barrel Aged Yeti, The Lost Abbey Angel's Share Ale",
          tags: 'specialty-beer, wood',
        },
        description:
          'This style is intended for beer aged in wood with added alcohol character from previous use of the barrel. Bourbon-barrel or other similar beers should be entered here.\n',
      },
    ],
  },
  {
    title: '34. Specialty Beer',
    description:
      'While there are many Specialty-Type Beers in these guidelines, the Specialty Beer style category is intended for those beers that do not fit anywhere else. Please check each previous Specialty-Type category before entering a beer in one of these styles.',
    styles: [
      {
        title: '34A. Commercial Specialty Beer',
        properties: {
          overallImpression: 'Based on declared beer.',
          aroma: 'Based on declared beer.',
          appearance: 'Based on declared beer.',
          flavor: 'Based on declared beer.',
          mouthfeel: 'Based on declared beer.',
          comments:
            "Intended as a catch-all location for specific beers that are based on unique commercial examples that don't fit existing styles. Past versions of the Style Guidelines included a Belgian Specialty Ale style; this style fits that general purpose, as well as allowing non-Belgian entries of similar intent.",
          entryInstructions:
            'The entrant must specify the name of the commercial beer, specifications (vital statistics) for the beer, and either a brief sensory description or a list of ingredients used in making the beer. Without this information, judges who are unfamiliar with the beer will have no basis for comparison.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples: 'Orval, La Chouffe',
          tags: 'specialty-beer',
        },
        description:
          "This style is intended for reproductions or interpretations of specific commercial beers that don't fit within defined styles. Beers entered here do not need to be exact copies. The beer should be judged as to how well it fits the broader style represented by the example beer, not how well it is an exact copy of a specific commercial product. If a Commercial Specialty Beer fits another defined style, do not enter it here.\n",
      },
      {
        title: '34B. Mixed-Style Beer',
        properties: {
          overallImpression:
            'Based on the declared Base Styles, methods, and ingredients. As with all Specialty-Type Beers, the resulting combination of beer styles needs to be harmonious and balanced, and be pleasant to drink.',
          aroma: 'Based on the declared Base Styles.',
          appearance: 'Based on the declared Base Styles.',
          flavor: 'Based on the declared Base Styles.',
          mouthfeel: 'Based on the declared Base Styles.',
          comments: 'See preamble for intent.',
          entryInstructions:
            'The entrant must specify the Base Style or Styles being used, and any special ingredients, processes, or variations involved. The entrant may provide an additional description of the sensory profile of the beer or the vital statistics of the resulting beer.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples:
            "Birrificio Italiano Tipopils, Firestone Walker Pivo Pils, Jack's Abby Hoponius Union, Ommegang Helles Superior",
          tags: 'specialty-beer',
        },
        description:
          "This style is intended for beers in Existing Styles (previously-defined Classic Style beers or Specialty-Type Beers) that are either:\nA combination of Existing Styles that are not defined previously in the guidelines, including combination of Specialty-Type Beers not otherwise allowable elsewhere.\nA variation of an Existing Style using a non-traditional method or process (e.g., dry-hopping, 'eis'-ing, stein bier) for that style.\nA variation of an Existing Style using a non-traditional ingredient (e.g., yeast with a non-traditional profile, hops with a different character than described in the Base Style).\nOut-of-spec variations of an Existing Style (e.g., 'imperial' versions, 'session' versions, overly-sweet versions, etc.).\nThis style is intended for beers that can't be entered in previously-listed styles first, including (and especially) the declared Base Style of beer. However, if the unusual method, process, or ingredient results in a beer that now fits within another defined style, the beer should be entered there. Note that some styles already allow for different strengths (e.g., IPAs, Saisons), so those variations should be entered as the appropriate Base Style.\nBear in mind that a poorly-made, faulted beer should not be used to define a new style. Drinkability should always be maintained, while allowing for creative new concepts.\n",
      },
      {
        title: '34C. Experimental Beer',
        properties: {
          overallImpression: 'Varies, but should be a unique experience.',
          aroma: 'Varies.',
          appearance: 'Varies.',
          flavor: 'Varies.',
          mouthfeel: 'Varies.',
          comments:
            'This style cannot represent a well-known commercial beer (otherwise it would be a Commercial Specialty Beer) and cannot fit into any other existing Specialty-Type Beer style (including those within this major category).',
          entryInstructions:
            'The entrant must specify the special nature of the experimental beer, including the special ingredients or processes that make it not fit elsewhere in the guidelines. The entrant must provide vital statistics for the beer, and either a brief sensory description or a list of ingredients used in making the beer. Without this information, judges will have no basis for evaluation.',
          vitalStatistics: {
            ABV: [0.1, 0.1],
            FG: [0.1, 0.1],
            OG: [0.1, 0.1],
            SRM: [0.1, 0.1],
            IBUs: [0.1, 0.1],
          },
          commercialExamples: 'None',
          tags: 'specialty-beer',
        },
        description:
          'This is explicitly a catch-all category for any beer that does not fit into an Existing Style description. No beer is ever "out of style" in this style, unless it can be entered in another beer style first. This is the last resort for any beer entered into a competition. With the broad definition for previous styles, this style should be rarely used.\n',
      },
    ],
  },
];
export default BeerStyles;
