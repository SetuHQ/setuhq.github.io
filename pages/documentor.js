import Head from 'next/head';
import styles from '../styles/Page.module.css';

const Documentor = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Open Source by Setu</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Documentor</h1>
                <section className={styles.buttongrid}>
                    <button className={styles.button}>Website</button>
                    <button className={styles.button}>GitHub</button>
                </section>
                <section className={styles.textgrid}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Orci a scelerisque purus semper eget duis.
                        Id velit ut tortor pretium. Suspendisse sed nisi lacus
                        sed viverra tellus in hac habitasse. Interdum velit
                        euismod in pellentesque massa placerat duis ultricies
                        lacus. Gravida in fermentum et sollicitudin. Malesuada
                        fames ac turpis egestas sed tempus. Facilisis gravida
                        neque convallis a cras semper auctor neque. Dolor sit
                        amet consectetur adipiscing elit ut. Ut ornare lectus
                        sit amet est. Vitae tortor condimentum lacinia quis vel
                        eros donec. Cursus in hac habitasse platea dictumst
                        quisque sagittis purus sit. Tellus pellentesque eu
                        tincidunt tortor aliquam nulla facilisi. Ante in nibh
                        mauris cursus. Viverra mauris in aliquam sem fringilla.
                        Odio facilisis mauris sit amet massa. Egestas integer
                        eget aliquet nibh praesent tristique magna sit.
                    </p>
                    <p>
                        Adipiscing enim eu turpis egestas pretium aenean. Enim
                        nunc faucibus a pellentesque sit amet porttitor eget.
                        Risus nullam eget felis eget nunc lobortis mattis
                        aliquam. Ipsum a arcu cursus vitae. Orci porta non
                        pulvinar neque laoreet suspendisse interdum consectetur.
                        Dictum at tempor commodo ullamcorper a lacus vestibulum
                        sed. Sit amet consectetur adipiscing elit ut aliquam
                        purus sit amet. Suspendisse sed nisi lacus sed viverra
                        tellus in hac. Facilisis sed odio morbi quis commodo.
                        Parturient montes nascetur ridiculus mus mauris vitae
                        ultricies leo integer. Condimentum vitae sapien
                        pellentesque habitant morbi tristique senectus et netus.
                        Enim ut tellus elementum sagittis vitae et leo. Accumsan
                        in nisl nisi scelerisque. Imperdiet massa tincidunt nunc
                        pulvinar. Commodo nulla facilisi nullam vehicula ipsum
                        a. Egestas sed sed risus pretium quam vulputate
                        dignissim suspendisse in.
                    </p>
                    <p>
                        Elit ut aliquam purus sit amet. Euismod elementum nisi
                        quis eleifend quam adipiscing vitae proin sagittis.
                        Posuere sollicitudin aliquam ultrices sagittis orci a
                        scelerisque. Cras adipiscing enim eu turpis. Pharetra
                        pharetra massa massa ultricies mi quis hendrerit dolor.
                        Lorem mollis aliquam ut porttitor leo a diam
                        sollicitudin. Egestas fringilla phasellus faucibus
                        scelerisque eleifend donec pretium vulputate sapien.
                        Aliquet nibh praesent tristique magna sit amet.
                        Porttitor lacus luctus accumsan tortor. Massa ultricies
                        mi quis hendrerit dolor magna eget est lorem. Adipiscing
                        at in tellus integer feugiat scelerisque. Ultrices neque
                        ornare aenean euismod. Mi proin sed libero enim sed.
                    </p>
                    <p>
                        Semper viverra nam libero justo laoreet sit amet.
                        Porttitor massa id neque aliquam vestibulum morbi.
                        Posuere morbi leo urna molestie at elementum eu
                        facilisis sed. Condimentum mattis pellentesque id nibh.
                        Nunc eget lorem dolor sed viverra ipsum nunc. Cursus in
                        hac habitasse platea dictumst quisque sagittis purus
                        sit. Tincidunt eget nullam non nisi est sit amet
                        facilisis. Hendrerit gravida rutrum quisque non tellus
                        orci ac auctor augue. Orci nulla pellentesque dignissim
                        enim. Dictum varius duis at consectetur lorem donec.
                        Gravida neque convallis a cras semper auctor. Vitae nunc
                        sed velit dignissim sodales ut eu. Odio eu feugiat
                        pretium nibh. Velit egestas dui id ornare arcu odio ut
                        sem. Euismod in pellentesque massa placerat duis
                        ultricies lacus sed. Aenean euismod elementum nisi quis
                        eleifend quam. Pellentesque habitant morbi tristique
                        senectus.
                    </p>
                    <p>
                        Penatibus et magnis dis parturient montes nascetur
                        ridiculus. Ac feugiat sed lectus vestibulum mattis
                        ullamcorper velit. Ornare aenean euismod elementum nisi
                        quis eleifend quam adipiscing vitae. Sollicitudin tempor
                        id eu nisl. Lorem sed risus ultricies tristique nulla.
                        Commodo elit at imperdiet dui accumsan. Eget mauris
                        pharetra et ultrices. Pellentesque elit ullamcorper
                        dignissim cras. Tincidunt eget nullam non nisi est sit.
                        Tincidunt praesent semper feugiat nibh sed pulvinar
                        proin. Non sodales neque sodales ut etiam. Vitae proin
                        sagittis nisl rhoncus mattis. Feugiat in fermentum
                        posuere urna. Commodo viverra maecenas accumsan lacus
                        vel facilisis volutpat. Magna fermentum iaculis eu non
                        diam phasellus vestibulum lorem. Integer malesuada nunc
                        vel risus commodo viverra maecenas accumsan lacus. Nec
                        dui nunc mattis enim ut tellus elementum.
                    </p>
                </section>
            </main>
            <footer className={styles.footer}>
                <a href="https://setu.co" target="_blank">
                    <img
                        src="/setu.svg"
                        alt="Setu Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
};

export default Documentor;
