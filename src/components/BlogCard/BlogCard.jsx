import { formatDateToNow } from 'helpers/formatDateToNow';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName, Date,
} from './BlogCard.styled';

export const BlogCard = ({id, name, postedAt, poster,tag, title, description, avatar}) => {
  return(
  <Card key={id}>
  <CardHeader>
    <CardPoster
          src={poster}
          alt={ title}
    />
  </CardHeader>
  <CardBody>
        <Tag>{ tag}</Tag>
        <CardTitle>{ title}</CardTitle>
    <CardText>
          { description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
          <Avatar src={avatar} alt={ name} />
      <UserInfo>
            <UserName>{ name}</UserName>
            <Date>{formatDateToNow(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>)
  
}

