// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import preloader from 'spectacle/lib/utils/preloader';
// Require CSS
require('normalize.css');

const images = {
  lut: require('../assets/logo.svg'),
  syntax: require('../assets/logo.png'),
  pocket: require('../assets/pocket.gif'),
  ricky: require('../assets/ricky.gif'),
  chris: require('../assets/chris.gif'),
  sk8: require('../assets/sk8.gif'),
  robocop: require('../assets/roboop.gif'),
  buyMyBook: require('../assets/buyMyBook.gif'),
  homer: require('../assets/homer.gif'),
  fast: require('../assets/2fast.gif')
};

preloader(images);

const theme = createTheme(
  {
    primary: '#111',
    secondary: '#FFB81C',
    tertiary: '#FFF',
    quarternary: '#CECECE'
  },
  {
    primary: 'Helvetica',
    secondary: 'Grandmaster Clash'
  },
  {
    components: {
      listItem: {
        fontSize: '4rem'
      }
    }
  }
);
theme.screen.components.listItem.fontSize = '3rem';
theme.screen.components.list.listStyle = 'none';
theme.screen.components.listItem.marginBottom = '2rem';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="Im going to be talking about learning fast. But this is more of a developer focused talk, JavaScript specifically. So this wont be a scientific look into leraningm, but actionable techniques for improving learning speed and quality in js <br/>
          Despite the name, there will not be any fast and furious gifs in this talk.
        "
        >
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="secondary"
            textFont="secondary"
          >
            2 Fast 2 Furious
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to learn quickly in a rapidly changing development world
          </Text>
          <Text margin="4rem 0 0" textColor="tertiary" size={1} bold>
            @stolinski @leveluptuts
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Fill>
            <Image src={images.fast} />
          </Fill>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="If you I've seen me before it's probably from one of these two things<br /><br />
          I created Level Up Tutorials where I've made thousands of both free and premium video tutorials that have gained over 22million views on Youtube<br /><br />
          I also host a weekly full stack podcast with Wes Bos called Syntax. We dive into all kinds of topics from React to Softskills and more."
        >
          <Heading size={1} textColor="secondary" textFont="secondary">
            Who Am I?
          </Heading>
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Image src={images.lut} />
            </Fill>
            <Fill>
              <Image src={images.syntax} />
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="tertiary"
          textColor="primary"
          notes="I've created over 2,000 some tutorials, I've had to make learning a priority.<br/><br/>
          I also host a weekly fullstack podcast where we are covering a wide range of topics that I have to be knowledgable.<br /><br/>
          For better or worse, I am constantly re-writing my codebase and it's pretty sick"
        >
          <Heading size={1} textColor="secondary" textFont="secondary">
            Legitimizer
          </Heading>
          <List style={{ listStyle: 'none' }}>
            <Appear>
              <ListItem>Created over 2,000 video tutorials</ListItem>
            </Appear>
            <Appear>
              <ListItem>Records a weekly fullstack podcast</ListItem>
            </Appear>
            <Appear>
              <ListItem>I'm obsessed with keeping codebase current</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="So why does this matter? You might be thinking that I'm not a podcast host, I don't make tutorials."
        >
          <Heading size={1} textColor="secondary" textFont="secondary">
            Why does this matter?
          </Heading>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="1,000 new JS frameworks<br />
          Current platforms are always evolving, job postings changing constantly. <br />
          Web development becoming so much more than html/css/js<br />
          New shiny things aren't always worthless
        "
        >
          <List style={{ listStyle: 'none' }}>
            <Appear>
              <ListItem>1,000 new JS frameworks</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Current platforms are always evolving, job postings changing
                constantly.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Web development becoming so much more than html/css/js
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>New shiny things aren't always worthless</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="So for the rest of the talk, I'll be giving you 6 actionable steps to improve your learning"
        >
          <Heading size={1} textColor="secondary" textFont="secondary">
            6 Steps for skillz
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 1.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Explore
          </Heading>
          <Image src={images.homer} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="I've heard too many people say This is the way, blogs suck for learning, videos suck for learning.<br/>
          I have a poor working memory, makes reading really tough"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Style
            </Heading>
            <ListItem>Find your preferred style of learning</ListItem>
            <ListItem style={{ fontSize: '3rem' }}>Docs</ListItem>
            <ListItem style={{ fontSize: '3rem' }}>Source</ListItem>
            <ListItem style={{ fontSize: '3rem' }}>Blogs</ListItem>
            <ListItem style={{ fontSize: '3rem' }}>
              Youtube Channels / Videos Tutorials
            </ListItem>
            <ListItem style={{ fontSize: '3rem' }}>Podcasts</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes=""
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Resources
            </Heading>
            <ListItem>Find your preferred learning resources</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 2.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Build Your Foundation
          </Heading>
          {/* Jackie Chan Gif */}
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="everyone want's to learn the flashy stuff, but withouth foundation, your house will collapse."
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              *Fun*damentals
            </Heading>
            <Appear>
              <ListItem>Core HTML, CSS, JS & Programming Fundamentals</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Without a strong foundation, your house will collapse
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>You can always be improving your foundation</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="focus on things you cna take with you<br />People in yt comments talking about .map being a react thing<br />
          Frameworks matter less when your JS is strong<br />
          Use native libs wherever possible over platform libs<br />
          THink about a lib that you used recently that could have been just a js lib instead of an React lib<br />
          Chances are that JS lib is more supported and less likely to go away"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Native
            </Heading>
            <Appear>
              <ListItem>Frameworks matter less when your JS is strong</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use native libs wherever possible over platform libs
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 3.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Narrow Your Focus
          </Heading>
          <Image src={images.chris} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="This advice applies more to major platorms (react, redux rather than smaller ones like styled-components, routing)
          learn react first <br />
          then react + redux<br />
          then react + apollo<br />"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Context Is Key
            </Heading>
            <ListItem>
              If you are trying to learn 5 things at once you won't have proper
              context for the concepts you are learning.
            </ListItem>
            <ListItem>Boundaries blurred</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="When you don't have a proper context, it makes adding on to concepts later on more difficult and in turn your future learning of concepts will be slower"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Turtle Time
            </Heading>
            <ListItem>
              Future learning speed is a slowed by not having proper context
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 4.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Promote Excitement
          </Heading>
          <Image src={images.pocket} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="What I mean by promote is that you need to find things to get you excited. <br /> Example hobby projects.. raspberry pi beer brewing setup, bboytools, video therman"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Fresh
            </Heading>
            <ListItem>
              Remember how much fun you were having when you first started to
              code?
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Flow
            </Heading>
            <ListItem>Flow happens when you are excited</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <List>
            <Heading size={2} textColor="secondary" textFont="secondary">
              Pick Your Projects
            </Heading>
            <ListItem>Things you care about</ListItem>
            <ListItem>Use hobbies for projects</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 5.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Grind Time
          </Heading>
          <Image src={images.sk8} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="The moment you think you are too smart, you've lost the game. I win by not being smart at all.<br />
          I'm ready to learn<br />
          I'm ready to keep an open mind<br />
          I'm a student"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Ego Trippin'
            </Heading>
            <ListItem>Check your ego. You aren’t that smart</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="When you are coding to learn. Stop worrying about getting everything right and break things. So much development happens in those moments where you are fixing problems that you created"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Iteration Driven Development
            </Heading>
            <ListItem>Give fewer shits and make more things</ListItem>
            <ListItem>Iteration and refinement will produce quality</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="There are always going to be a ton of smarter people than you, use their brains.<br />
          I don't know how many people remember the John Papa style guide..<br />
          Alot of people might look at snippets as cheating leraning<br />
          I see it as exposure to best practices<br />
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Use Smarter People
            </Heading>
            <ListItem>Find Good Style Guides</ListItem>
            <ListItem>User sponsored Snippet Libraries</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 6.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Total Immersion
          </Heading>
          <Image src={images.robocop} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="Youre going to hear how people who talk about this stuff talk."
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Consume
            </Heading>
            <ListItem>
              Podcasts, YT Videos, Blogs, Slack Groups, Twitter Follower
            </ListItem>
            <ListItem>Let it permeate your brain</ListItem>
            <ListItem>Surround yourself with topic</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote textFont="secondary">
            <Quote>If you're not first, you're last</Quote>
            <Cite>Ricky Bobby</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={1} textColor="primary" textFont="secondary">
            Find Me
          </Heading>
          <Text>Twitter & IG</Text>
          <Text>@stolinski / @leveluptuts</Text>
          <Text>Level Up Tutorials Youtube</Text>
          <Text>LevelUpTutorials.com</Text>
          <Text>Syntax.fm</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary" textFont="secondary">
            Support
          </Heading>
          <Image src={images.buyMyBook} />
          <Text>Subscribe or Buy</Text>
          <Text>LevelUpTutorials.com</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary" textFont="secondary">
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

// pacing was good
// could be slower
// Self concious about my work or why
// way I was speaking.
// sell my stuff.. I've made X tutorials not.... I've like made like X tutorials.

//
