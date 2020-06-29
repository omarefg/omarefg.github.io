export const shake:string = `
  @keyframes shake {
    5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
        filter: blur(0.018em);
        transform: translateY(0.018em) rotate(0deg);
    }

    10%, 30%, 40%, 50%, 70%, 80%, 90% {
        filter: blur(0.01em);
        transform: translateY(-0.018em) rotate(0deg);
    }

    20%, 60% {
        filter: blur(0.03em);
        transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%, 85% {
        filter: blur(0.03em);
        transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
        filter: blur(0.007em);
        transform: translate(0) rotate(-0.5deg);
    }
  }
`
