(()=>{
const params=new URLSearchParams(location.search);
if(params.get('lang')!=='en') return;

document.documentElement.lang='en';
const path=location.pathname.replace(/\/+$/,'')||'/';

const translateExact=(map)=>{
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    const t=n.nodeValue.trim();
    if(map[t]){
      const lead=n.nodeValue.match(/^\s*/)[0];
      const trail=n.nodeValue.match(/\s*$/)[0];
      n.nodeValue=lead+map[t]+trail;
    }
  });
};

const common={
  'Noticias':'News',
  'Noticias y novedades':'News and updates',
  'Conoce historias, avances y novedades sobre Primero LEE y el trabajo de Fundación Crecer con Todos junto a comunidades educativas en Chile.':'Discover stories, progress and updates from Primero LEE and Fundación Crecer con Todos’ work with educational communities across Chile.',
  '13 de octubre de 2026':'October 13, 2026',
  'Leer noticia →':'Read article →',
  '← Volver a noticias':'← Back to news',
  'Ver todas las noticias →':'View all news →',
  'Historias y novedades que movilizan el aprendizaje.':'Stories and updates that move learning forward.',
  'Nuestra directora ejecutiva, Valentina Wagenreld, participó en el encuentro que renovó la meta de que todos los niños y niñas lean comprensivamente antes de finalizar segundo básico al 2030.':'Our Executive Director, Valentina Wagenreld, took part in the meeting that renewed the goal of ensuring every child can read with comprehension by the end of second grade by 2030.'
};

translateExact(common);

if(path==='/noticias'){
  const map={
    'Fundación Crecer con Todos reafirma su respaldo al Compromiso Nacional por el Aprendizaje Lector como una tarea de país':'Fundación Crecer con Todos reaffirms its support for the National Commitment to Reading Learning as a country-wide priority',
    'La Fundación participó en el encuentro que renovó la meta de que todos los niños y niñas lean comprensivamente antes de finalizar segundo básico al 2030.':'The Foundation took part in the meeting that renewed the goal of ensuring every child can read with comprehension by the end of second grade by 2030.'
  };
  translateExact(map);
  document.title='News | Fundación Crecer con Todos';
}

if(path==='/noticias/compromiso-nacional-aprendizaje-lector'){
  const map={
    'Noticias · Aprendizaje lector':'News · Reading learning',
    'Fundación Crecer con Todos reafirma su respaldo al Compromiso Nacional por el Aprendizaje Lector como una tarea de país':'Fundación Crecer con Todos reaffirms its support for the National Commitment to Reading Learning as a country-wide priority',
    'Nuestra directora ejecutiva, Valentina Wagenreld, asistió al encuentro en La Moneda que renovó la meta de que todos los niños y niñas lean comprensivamente antes de finalizar segundo básico al 2030. Un desafío que requiere un trabajo integral con las comunidades educativas y una conexión entre la experiencia de los territorios y las políticas públicas.':'Our Executive Director, Valentina Wagenreld, attended the meeting at La Moneda that renewed the goal of ensuring every child can read with comprehension by the end of second grade by 2030. Meeting this challenge requires comprehensive work with educational communities and a strong connection between local experience and public policy.',
    'Fundación Crecer con Todos':'Fundación Crecer con Todos',
    'Fundación Crecer con Todos participó, a través de su directora ejecutiva, Valentina Wagenreld, en la conmemoración del primer aniversario del Compromiso Nacional por el Aprendizaje Lector, realizada el 13 de octubre en el Palacio de La Moneda. La instancia reunió a autoridades, representantes del mundo académico, organismos internacionales y organizaciones de la sociedad civil en torno a una prioridad compartida: que todos los niños y niñas de Chile aprendan a leer comprensivamente a tiempo.':'Fundación Crecer con Todos, represented by its Executive Director, Valentina Wagenreld, took part in the first-anniversary commemoration of the National Commitment to Reading Learning, held on October 13 at La Moneda Palace. The event brought together public authorities, academics, international organizations and civil society around a shared priority: ensuring that every child in Chile learns to read with comprehension on time.',
    'El encuentro, organizado por la red Por un Chile que Lee y UNESCO, contó con la participación del Presidente de la República, José Antonio Kast, y la ministra de Educación, María Paz Arzola, quienes suscribieron el acuerdo y reafirmaron su meta al 2030. También participaron exministros de Educación y parlamentarios, como expresión del carácter transversal de una tarea que requiere continuidad más allá de los períodos de gobierno.':'The meeting, organized by the Por un Chile que Lee network and UNESCO, included the participation of President José Antonio Kast and Education Minister María Paz Arzola, who signed the agreement and reaffirmed its 2030 goal. Former education ministers and members of Congress also took part, underscoring the cross-cutting nature of a task that requires continuity beyond individual administrations.',
    'Para nuestra Fundación, esta convocatoria se vincula con una convicción que orienta nuestro trabajo: la comprensión lectora sostiene toda la trayectoria educativa. Avanzar hacia una meta nacional exige un trabajo integral que fortalezca las capacidades de docentes, equipos directivos, familias y sostenedores, con apoyos y evidencia para mejorar los aprendizajes.':'For our Foundation, this initiative reflects a conviction that guides our work: reading comprehension underpins the entire educational journey. Advancing toward a national goal requires comprehensive work that strengthens the capacities of teachers, school leadership teams, families and education providers, supported by evidence and tools that improve learning outcomes.',
    'Una prioridad compartida para el país':'A shared priority for the country',
    'Durante la ceremonia, el Presidente Kast destacó el valor de la lectura para acceder al conocimiento. “Es la llave maestra que permite abrir todas las puertas del conocimiento”, señaló. El mandatario anunció que el Ministerio de Educación concentrará sus esfuerzos en educación parvularia, primero y segundo básico, con especial atención a los aprendizajes fundamentales y a la identificación oportuna de quienes necesitan apoyo.':'During the ceremony, President Kast highlighted the value of reading as a gateway to knowledge. “It is the master key that opens every door to knowledge,” he said. He announced that the Ministry of Education would focus its efforts on early childhood education and first and second grade, with special attention to foundational learning and the timely identification of students who need additional support.',
    'La ministra Arzola, por su parte, llamó a fortalecer la colaboración entre los distintos actores del sistema educativo. “El objetivo es ambicioso. Necesitamos multiplicar y articular los esfuerzos”, afirmó. Además, destacó la importancia de la primera infancia, etapa en que se desarrollan el lenguaje, el vocabulario y la comprensión oral que preparan el aprendizaje de la lectura.':'Minister Arzola, for her part, called for stronger collaboration among the different actors in the education system. “The goal is ambitious. We need to multiply and coordinate our efforts,” she said. She also emphasized the importance of early childhood, when language, vocabulary and oral comprehension develop and lay the groundwork for learning to read.',
    'La jornada también contó con la intervención de Esther Kuisch Laroche, directora de la Oficina Regional de UNESCO en Santiago, quien relevó la necesidad de convertir el compromiso en avances concretos y sostenibles. Desde el mundo académico, la rectora de la Universidad de Chile, Alejandra Mizala, destacó el aporte de la formación docente y la investigación al mejoramiento de la enseñanza.':'The event also featured Esther Kuisch Laroche, Director of UNESCO’s Regional Office in Santiago, who stressed the need to turn the commitment into concrete and sustainable progress. From academia, University of Chile Rector Alejandra Mizala highlighted the contribution of teacher training and research to improving instruction.',
    'Carolina Andueza, presidenta de Por un Chile que Lee, enfatizó la dimensión colectiva del desafío: “Necesitamos un esfuerzo sistémico, sostenido y a gran escala”. Su intervención llamó a traducir el acuerdo en decisiones, inversión y acciones que permitan acelerar los avances.':'Carolina Andueza, President of Por un Chile que Lee, emphasized the collective nature of the challenge: “We need a systemic, sustained and large-scale effort.” Her remarks called for translating the agreement into decisions, investment and actions that can accelerate progress.',
    'Un trabajo integral con las comunidades educativas':'Comprehensive work with educational communities',
    'Desde Fundación Crecer con Todos aportamos a este propósito con la experiencia de Primero LEE y el trabajo junto a comunidades educativas e instituciones. Este acompañamiento reconoce que el aprendizaje lector requiere capacidades y responsabilidades compartidas entre quienes enseñan, lideran las escuelas, acompañan desde el hogar y toman decisiones para los territorios.':'At Fundación Crecer con Todos, we contribute to this goal through the experience of Primero LEE and our work alongside educational communities and institutions. This support recognizes that reading development depends on shared capacities and responsibilities among those who teach, lead schools, support children at home and make decisions for local education systems.',
    '“Desde nuestra experiencia, sabemos que mejorar los aprendizajes requiere un trabajo integral con docentes, equipos directivos, familias y sostenedores. Cada uno cumple un papel fundamental, y nuestro aporte como Fundación es acompañar y fortalecer esas capacidades en torno a un propósito compartido. Conectar este trabajo en las comunidades educativas y los territorios con las decisiones de política pública es clave para que los avances lleguen a más niños y niñas y se sostengan en el tiempo”.':'“From our experience, we know that improving learning outcomes requires comprehensive work with teachers, school leadership teams, families and education providers. Each plays a fundamental role, and our contribution as a Foundation is to support and strengthen those capacities around a shared purpose. Connecting this work in educational communities and local territories with public policy decisions is key to ensuring progress reaches more children and is sustained over time.”',
    'Valentina Wagenreld, directora ejecutiva de Fundación Crecer con Todos':'Valentina Wagenreld, Executive Director of Fundación Crecer con Todos',
    'Esta mirada dialoga con los siete pilares del compromiso, que reúne a más de 300 autoridades, académicos y representantes de la sociedad civil. Entre ellos están el seguimiento de los avances, la enseñanza basada en evidencia, el trabajo desde la primera infancia y con las familias, la atención oportuna del rezago y el acceso a libros y experiencias lectoras.':'This perspective aligns with the commitment’s seven pillars, which bring together more than 300 public officials, academics and civil society representatives. These pillars include tracking progress, evidence-based instruction, work beginning in early childhood and with families, timely support for learning gaps, and access to books and reading experiences.',
    'En este marco, la Agencia de Calidad de la Educación destacó la evaluación Impulso Lector para segundo básico, que busca entregar información temprana a los establecimientos para orientar decisiones de mejora. Contar con evidencia sobre los aprendizajes es parte de las condiciones necesarias para identificar dificultades y ofrecer apoyos a tiempo.':'In this context, Chile’s Education Quality Agency highlighted the Impulso Lector assessment for second grade, designed to provide schools with early information to guide improvement decisions. Having evidence on learning outcomes is essential to identifying difficulties and providing timely support.',
    'Nuestra participación en este encuentro reafirma el compromiso de Fundación Crecer con Todos con una educación que amplíe las oportunidades de cada niño y niña. La meta al 2030 requiere un esfuerzo sostenido y compartido, capaz de transformar las decisiones del presente en mejores trayectorias educativas.':'Our participation in this meeting reaffirms Fundación Crecer con Todos’ commitment to an education system that expands opportunities for every child. Reaching the 2030 goal will require sustained, shared effort capable of turning today’s decisions into stronger educational pathways.'
  };
  translateExact(map);
  document.title='National Commitment to Reading Learning | Fundación Crecer con Todos';
}
})();
