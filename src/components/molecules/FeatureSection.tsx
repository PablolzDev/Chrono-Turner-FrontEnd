import React from 'react'
import FeatureItem from '../UI/FeatureItem';
import styles from '@styles/FeatureSection.module.css'

const FeatureSection: React.FC = () => {
    return (
      <section className={styles.featureSection}>
        <div className={styles.featureContent}>
          <h2 className={styles.featureHeading}>Simplifica tu día</h2>
          <p className={styles.featureSubheading}>
            Organiza tus tareas, optimiza tu tiempo y alcanza tus metas con facilidad.
          </p>
          
          <div className={styles.featureList}>
            <FeatureItem 
              icon="🧠"
              title="Gestión inteligente de tareas"
              description="Prioriza automáticamente tus actividades y mantén un flujo de trabajo eficiente."
            />
            <FeatureItem 
              icon="📊"
              title="Análisis de productividad"
              description="Obtén insights valiosos sobre tus hábitos de trabajo y áreas de mejora."
            />
            <FeatureItem 
              icon="👥"
              title="Colaboración sin esfuerzo"
              description="Comparte proyectos y tareas con tu equipo en tiempo real."
            />
            <FeatureItem 
              icon="🔧"
              title="Adaptabilidad total"
              description="Personaliza la app según tus necesidades específicas y estilo de trabajo."
            />
            <FeatureItem 
              icon="🔄"
              title="Sincronización multiplataforma"
              description="Accede a tus tareas desde cualquier dispositivo, en cualquier momento."
            />
          </div>
          
          <p className={styles.featureFooter}>
            Descubre cómo nuestra app transforma el caos en claridad, permitiéndote enfocarte en lo que realmente importa.
          </p>
          
          <div className={styles.ctaContainer}>
            <a href="#" className={styles.ctaButton}>
              Comienza tu prueba gratuita
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;