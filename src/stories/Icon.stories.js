// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Icon from "../app/ui/Icon";

const meta = {
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

export const Calendar = {
  args: {
    id: "calendar",
  },
};

export const Check = {
  args: {
    id: "check",
  },
};

export const Chevron = {
  args: {
    id: "chevron",
  },
};

export const Close = {
  args: {
    id: "close",
  },
};

export const EyeClosed = {
  args: {
    id: "eyeClosed",
  },
};

export const EyeOpened = {
  args: {
    id: "eyeOpened",
  },
};

export const Logout = {
  args: {
    id: "logout",
  },
};

export const Minus = {
  args: {
    id: "minus",
  },
};

export const Plus = {
  args: {
    id: "plus",
  },
};

export const Question = {
  args: {
    id: "question",
  },
};

export const ThumbsDown = {
  args: {
    id: "thumbsDown",
  },
};
export const ThumbsUp = {
  args: {
    id: "thumbsUp",
  },
};

export const Upload = {
  args: {
    id: "upload",
  },
};

export const User = {
  args: {
    id: "user",
  },
};
