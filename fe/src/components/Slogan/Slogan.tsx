import { motion } from 'framer-motion';

export default function Slogan() {
  const contents = '하나의 레시피에서 출발하는 프로젝트의 완성';
  const text = contents.split(' ');

  return (
    <span>
      {text.map((el, i) => (
        <motion.span
          key={`${el}-${i}`} // 각 요소의 고유성을 보장하기 위해 키에 문자열을 추가합니다.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          style={{ fontSize: 25, fontWeight: 700, textAlign: 'center' }}
        >
          {el}
          {'\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}
