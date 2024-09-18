import React from 'react';
import styles from '@styles/Hero.module.css';
import Card from '@components/UI/Card';

const Panel: React.FC = () => (
    <div className={styles.scroller}>
        <div className={styles.content}>
            <div className={styles.panel}>
                <Card title="📋 Revisión de Tareas: " description="Revisar todas las tareas pendientes antes de la reunión."  />
                <Card title="📝 Redacción del Informe: " description="Redactar el informe de la semana pasada." />
                <Card title="🔍 Revisión de Código: " description="Hacer una revisión del código enviado por el equipo."  />
                <Card title="📅 Planificación de Proyectos: " description="Definir los próximos pasos y asignar tareas." />
                <Card title="✅ Tareas Completadas: " description="Marcar las tareas que ya han sido completadas." />
                <Card title="📦 Envío de Material: " description="Preparar y enviar el material necesario al cliente."  />
            </div>
        </div>
    </div>
);

export default Panel;
