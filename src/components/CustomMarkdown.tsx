import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Typography } from 'antd';

const { Text, Link, Title, Paragraph } = Typography;
type Props = {
  children: string | null | undefined;
};

const CustomMarkdown = (props: Props) => {
  return (
    <Typography>
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={props?.children}
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                PreTag='div'
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={oneLight}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
          h1(props) {
            const { children, ...rest } = props;
            return (
              <Title {...rest} level={1}>
                {children}
              </Title>
            );
          },
          h2(props) {
            const { children, ...rest } = props;
            return (
              <Title {...rest} level={2}>
                {children}
              </Title>
            );
          },
          h3(props) {
            const { children, ...rest } = props;
            return (
              <Title {...rest} level={3}>
                {children}
              </Title>
            );
          },
          h4(props) {
            const { children, ...rest } = props;
            return (
              <Title {...rest} level={4}>
                {children}
              </Title>
            );
          },
          h5(props) {
            const { children, ...rest } = props;
            return (
              <Title {...rest} level={5}>
                {children}
              </Title>
            );
          },

          p(props) {
            const { children, ...rest } = props;
            return <Paragraph {...rest}>{children}</Paragraph>;
          },
          strong(props) {
            const { children, ...rest } = props;
            return (
              <Text {...rest} strong>
                {children}
              </Text>
            );
          },
          em(props) {
            const { children, ...rest } = props;
            return (
              <Text {...rest} italic>
                {children}
              </Text>
            );
          },
          a(props) {
            const { children, href } = props;
            return <Link href={href}>{children}</Link>;
          }
        }}
      />
    </Typography>
  );
};

export default CustomMarkdown;
