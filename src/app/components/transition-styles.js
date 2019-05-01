export default {
  none: {
    duration: 150,
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 }
  },
  slideFromTop: {
    duration: 300,
    entering: { left: '0', bottom: '100%' },
    entered: { left: '0', bottom: '0' },
    exiting: { left: '0', bottom: '0' },
    exited: { left: '0', bottom: '100%' }
  },
  slideFromBottom: {
    duration: 300,
    entering: { left: '0', top: '100%' },
    entered: { left: '0', top: '0' },
    exiting: { left: '0', top: '0' },
    exited: { left: '0', top: '100%' }
  },
  slideFromLeft: {
    duration: 300,
    entering: { right: '100%', top: '0' },
    entered: { right: '0', top: '0' },
    exiting: { right: '0', top: '0' },
    exited: { right: '100%', top: '0' }
  },
  slideFromRight: {
    duration: 300,
    entering: { left: '100%', top: '0' },
    entered: { left: '0', top: '0' },
    exiting: { left: '0', top: '0' },
    exited: { left: '100%', top: '0' }
  }
}
