import React from 'react';
import {
  Appear,
  CodePane,
  Deck,
  UnorderedList,
  ListItem,
  Slide,
  Heading,
  Text,
  Image,
  Stepper,
  Grid,
  Box,
  CodeSpan,
  FlexBox,
  FullScreen,
  Progress,
  Link,
  Quote,
} from 'spectacle';
import theme from './theme';
import HtmlSemanticSubtleImg1 from './assets/html-semantic-subtle-0.png';
import HtmlSemanticSubtleImg2 from './assets/html-semantic-subtle-5.png';
import HtmlSemanticSubtleImg3 from './assets/html-semantic-subtle-6.png';
import DOMFullProcessImg from './assets/dom-full-process.png';
import CSSOMTreeImg from './assets/cssom-tree.png';
import RenderTreeImg from './assets/render-tree-construction.png';
import IBMFestPerfSnap from './assets/ibmfest-perf-snap.png';
import YzonePoorColorContrastImg from './assets/yzone-poor-contrast.png';
import {
  semanticMarkupSolution1,
  semanticMarkupSolution1Images,
  semanticMarkupSolution2,
  semanticMarkupSolution2Images,
  accessibleMarkup,
} from './stepper-steps';


function RefLink({ children, href = children, target = "blank", ...props }) {
  return <Link href={href} target={target} color="quaternary" fontSize={20} {...props}>{children}</Link>
}

function Footnote({ children, ...props }) {
  return <Text color="quaternary" fontSize={18} {...props}>{children}</Text>
}

function CS({ children, ...props }) {
  return <CodeSpan color="quinary" {...props}>{children}</CodeSpan>
}

function template() {
  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
      <Box padding="1em">
        <Progress />
      </Box>
    </FlexBox>
  );
}

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <Grid gridTemplateRows="1fr .2fr" height="100%" alignItems="center">
          <Heading>3 layers of the Web</Heading>
          <Text textAlign="center" fontSize={20}>
            Nizomiddin Toshpulatov, BCPM IT, 2020
          </Text>
        </Grid>
      </Slide>
      <Slide>
        <Heading>What are those layers?</Heading>
          <UnorderedList>
            <Appear elementNum={0}>
              <ListItem>HTML</ListItem>
            </Appear>
            <Appear elementNum={1}>
              <ListItem>CSS</ListItem>
            </Appear>
            <Appear elementNum={2}>
              <ListItem>JavaScript</ListItem>
            </Appear> 
          </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Semantic markup</Heading>
        <Appear elementNum={0}>
          <CodePane language="html" indentSize={4}>
            {`
<div>
  <div>I like simple things</div>
  <span>That's why I don't use JS frameworks.</span>
</div>
            `}
          </CodePane>
        </Appear>
        <Appear elementNum={1}>
          <Text textAlign="center">vs</Text>
        </Appear>
        <Appear elementNum={2}>
          <CodePane language="html" indentSize={4}>
            {`
<section>
  <header>I like simple things</header>
  <p>That's why I don't use Angular.</p>
</section>
            `}
          </CodePane>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Subtle things</Heading>
        <Appear elementNum={1}>
          <Text textAlign="center">How to markup this?</Text>
        </Appear>
        <Appear elementNum={0}>
          <Image
            src={HtmlSemanticSubtleImg1}
            width="100%"
            height="500px"
            style={{ objectPosition: 'top' , objectFit: 'contain' }}
          />
        </Appear>
      </Slide>
      <Slide>
        <Text>Solution #1:</Text>
        <Stepper values={semanticMarkupSolution1}>
          {([string = '', [highlightStart = 0, highlightEnd = 0]] = ['', [0, 0]], step) => (
            <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
              <CodePane
                language="html"
                highlightStart={highlightStart}
                highlightEnd={highlightEnd}
                indentSize={4}
              >
                {string}
              </CodePane>
              {step < 1
                ? <Image src={semanticMarkupSolution1Images[0]} />
                : step < 2 ? <Image src={semanticMarkupSolution1Images[1]} />
                : step < 5 ? <Image src={semanticMarkupSolution1Images[2]} />
                : step < 10 ? <Image src={semanticMarkupSolution1Images[3]} />
                : <Image src={semanticMarkupSolution1Images[4]} />
              }
            </Grid>
          )}
        </Stepper>
      </Slide>
      <Slide>
        <Text>Think outside of "Developer Box"</Text>
        <Box position="relative">
          <Appear elementNum={0}>
            <Image
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              src={HtmlSemanticSubtleImg1}
              width="100%"
              height="550px"
              style={{ objectPosition: 'top' , objectFit: 'contain' }}
            />
          </Appear>
          <Appear elementNum={1}>
            <Image
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              src={HtmlSemanticSubtleImg2}
              width="100%"
              height="550px"
              style={{ objectPosition: 'top' , objectFit: 'contain' }}
            />
          </Appear>
          <Appear elementNum={2}>
            <Image
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              src={HtmlSemanticSubtleImg3}
              width="100%"
              height="550px"
              style={{ objectPosition: 'top' , objectFit: 'contain' }}
            />
          </Appear>
        </Box>
      </Slide>
      <Slide>
        <Text>Solution #2:</Text>
        <Stepper values={semanticMarkupSolution2}>
          {([string = '', [highlightStart = 0, highlightEnd = 0]] = ['', [0, 0]], step) => (
            <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
              <CodePane
                language="html"
                highlightStart={highlightStart}
                highlightEnd={highlightEnd}
                indentSize={4}
              >
                {string}
              </CodePane>
              {step < 2
                ? <Image src={semanticMarkupSolution2Images[0]} />
                : <Image src={semanticMarkupSolution2Images[1]} />
              }
            </Grid>
          )}
        </Stepper>
      </Slide>
      <Slide>
        <Heading>What are the benefits?</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>Clearer intent of the elements</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              Better accessibility:
              <UnorderedList>
                <ListItem>
                  No need to provide <CS>role</CS> attribute for the wrapper element
                </ListItem>
                <ListItem>
                  No need to provide <CS>aria-label</CS> attribute for each child element
                </ListItem>
              </UnorderedList>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Text>Improving accessibility:</Text>
        <Stepper
          values={[
            ...accessibleMarkup,
            accessibleMarkup[accessibleMarkup.length - 1],
            accessibleMarkup[accessibleMarkup.length - 1]
          ]}
        >
          {([string = '', [highlightStart = 0, highlightEnd = 0]] = ['', [0, 0]], step) => (
            <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
              <CodePane
                language="html"
                highlightStart={highlightStart}
                highlightEnd={highlightEnd}
                indentSize={4}
              >
                {string}
              </CodePane>
              {step === 1
                ? <Image src="img.png" />
                : step > 1 ? <Image src="img.png" alt="Lukáš Gavuliak" />
                : ''
              }
              <Box>
                {step > 2 && <Text>Why bother?</Text>}
                {step > 3 && (
                  <Text>
                    Screen readers read content of the <CS>alt</CS> attribute.
                  </Text>
                )}
              </Box>
            </Grid>
          )}
        </Stepper>
      </Slide>
      <Slide>
        <Text>
          DOM - Document Object Model is the data representation of the objects that comprise the structure and content of a document on the web.
        </Text>
        <RefLink>
          https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
        </RefLink>
        <Appear elementNum={0}>
          <Text>How DOM tree is generated?</Text>
        </Appear>
        <UnorderedList>
          <Appear elementNum={1}>
            <ListItem>
              Read characters - <CS>{`<`}</CS>, <CS>b</CS>, <CS>o</CS>, <CS>d</CS>, ...
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              Tokenize tags - <CS>{`<body>`}</CS>, <CS>{`<nav>`}</CS>, and etc.
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>Create nodes</ListItem>
          </Appear>
        </UnorderedList>
        <Appear elementNum={4}>
          <RefLink>
            https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model
          </RefLink>
        </Appear>
      </Slide>
      <Slide backgroundColor="secondary">
        <Image src={DOMFullProcessImg} alt="DOM full parsing process" style={{ objectFit: 'contain' }} />
        <RefLink color="tertiary">
          https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model
        </RefLink>
      </Slide>
      <Slide>
        <Text>
          CSSOM - CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.
        </Text>
        <RefLink>
          https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
        </RefLink>
      </Slide>
      <Slide backgroundColor="secondary">
        <FlexBox justifyContent="center" alignItems="center" flexDirection="column" height="100%">
          <Image src={CSSOMTreeImg} alt="CSSOM tree" style={{ objectFit: 'contain' }} />
          <RefLink color="tertiary">
            https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model
          </RefLink>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="secondary">
        <FlexBox justifyContent="center" alignItems="center" flexDirection="column" height="100%">
          <Image src={RenderTreeImg} alt="Render tree construction" style={{ objectFit: 'contain' }} />
          <RefLink color="tertiary">
            https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction
          </RefLink>
        </FlexBox>
      </Slide>
      <Slide>
        <Text>So what?</Text>
        <Appear elementNum={0}>
          <Text>
            Parsing and rendering DOM and CSSOM trees take time. We can improve performance by optimizing our HTML markup.
          </Text>
        </Appear>
        <Appear elementNum={1}>
          <FlexBox justifyContent="center" alignItems="center" flexDirection="column">
            <Image src={IBMFestPerfSnap} alt="Performance snapshot" style={{ objectFit: 'contain' }} /> 
            <Footnote>IBMFest.sk performance snapshot</Footnote>   
          </FlexBox>
        </Appear>
      </Slide>
      <Slide>
        <Text>
          Simplest optimization is too avoid so called "div soups": 
        </Text>
        <Appear elementNum={0}>
          <CodePane language="html" indentSize={4} autoFillHeight height="100%">
            {`
<div class="my-wrapper">
  <div class="wrapper-content">
    <div class="content-wrapper">
      <div class="content-wrapper-wrapper">
        <div class="content-wrapper-wrapper-wrapper">
          <div class="content">
            🤯
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            `}
          </CodePane>
        </Appear>
        <Appear elementNum={1}>
          <Text>
            "[div, section] soups" can be avoided by using modern CSS layouts such as Grid and Flexbox.
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <iframe
          height="90%"
          scrolling="no"
          title="How to avoid div soups"
          src="https://codepen.io/Hazeman/embed/oNzojWL?height=265&theme-id=dark&default-tab=css,result"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen <a href='https://codepen.io/Hazeman/pen/oNzojWL'>How to avoid div soups</a> by Nizomiddin Toshpulatov (<a href='https://codepen.io/Hazeman'>@Hazeman</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </Slide>
      <Slide>
        <Heading>
          CSS Units
        </Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              Absolute length units
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              Relative length units
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Text>Absolute length units</Text>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem><CS>cm</CS> - centimeters, <CS>1cm = 96px/2.54</CS></ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem><CS>mm</CS> - millimeters, <CS>1mm = 1/10th of 1cm</CS></ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem><CS>Q</CS> - quarter-millimeters <CS>1Q = 1/40th of 1cm</CS></ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem><CS>in</CS> - inches <CS>1in = 2.54cm = 96px</CS></ListItem>
          </Appear>
          <Appear elementNum={4}>
            <ListItem><CS>pc</CS> - picas <CS>1pc = 1/6th of 1in</CS></ListItem>
          </Appear>
          <Appear elementNum={5}>
            <ListItem><CS>pt</CS> - points <CS>1pt = 1/72th of 1in</CS></ListItem>
          </Appear>
          <Appear elementNum={6}>
            <ListItem><CS>px</CS> - pixels <CS>1px = 1/96th of 1in</CS></ListItem>
          </Appear>
        </UnorderedList>
        <Appear elementNum={7}>
          <Footnote>
            Most of these units are mainly used for printing.
          </Footnote>
          <RefLink>
            https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
          </RefLink>
        </Appear>
      </Slide>
      <Slide>
        <Text>Relative length units</Text>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              <CS>em</CS> - font size of the parent, in the case of typographical properties like <CS>font-size</CS>, and font size of the element itself, in the case of other properties like <CS>width</CS>.
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              <CS>ex</CS> - x-height of the element's font.
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CS>ch</CS> - the advance measure (width) of the glyph "0" of the element's font.
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>
              <CS>rem</CS> - font size of the root element.
            </ListItem>
          </Appear>
          <Appear elementNum={4}>
            <ListItem>
              <CS>lh</CS> - line height of the element.
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Text>Relative length units</Text>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              <CS>vw</CS> - 1% of the viewport's width.
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              <CS>vh</CS> - 1% of the viewport's height.
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CS>vmin</CS> - 1% of the viewport's smaller dimension.
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>
              <CS>vmax</CS> - 1% of the viewport's larger dimension.
            </ListItem>
          </Appear>
        </UnorderedList>
        <Appear elementNum={4}>
          <RefLink>
            https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
          </RefLink>
        </Appear>
      </Slide>
      <Slide>
        <Text>Prefer relative units over absolute ones</Text>
        <Appear elementNum={0}>
          <Text>Benefits:</Text>
        </Appear>
        <UnorderedList>
          <Appear elementNum={1}>
            <ListItem>
              Layout and styles are adjusted based on the screen and font size.
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              User can adjust size of the content.
            </ListItem>
          </Appear>
        </UnorderedList>
        <Appear elementNum={3}>
          <RefLink>https://codepen.io/Hazeman/pen/wvzGXBG</RefLink>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Modern CSS</Heading>
        <Appear elementNum={0}>
          <Text fontSize={28}>
            CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.
          </Text>
          <RefLink href="https://css-tricks.com/snippets/css/complete-guide-grid/">Complete guide to CSS Grid</RefLink>
          <RefLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">
            About CSS Grid
          </RefLink>
        </Appear>
        <Appear elementNum={1}>
          <Text fontSize={28}>
            The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.
          </Text>
          <RefLink href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Complete guide to Flexbox</RefLink>
          <RefLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox basic concepts
          </RefLink>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Accessibility</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>Color contrast</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>Font size</ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              CSS media features:
              <UnorderedList>
                <ListItem><CS>prefers-contrast</CS></ListItem>
                <ListItem><CS>prefers-reduced-motion</CS></ListItem>
                <ListItem><CS>prefers-reduced-transparency</CS></ListItem>
              </UnorderedList>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Text>Good color contrast matters</Text>
        <Image src={YzonePoorColorContrastImg} alt="Poor color contrast example" style={{ objectFit: 'contain' }} />
      </Slide>
      <Slide>
        <Text>Tools to check color contrast:</Text>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              Google Chrome and Edge Chromium inspection tool
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              Web AIM tool: <RefLink>https://webaim.org/resources/contrastchecker/</RefLink>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Text>Font size</Text>
        <Appear elementNum={0}>
          <Text>Minimum font size should be 16px</Text>
        </Appear>
        <Appear elementNum={1}>
          <Text>Always use relative CSS units for font sizes - <CS>rem</CS> and <CS>em</CS>.</Text>
        </Appear>
        <Appear elementNum={2}>
          <Text>Optimize letter-spacing based on the font and its weight</Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>JavaScript</Heading>
      </Slide>
    </Deck>
  );
}

export default App;
