import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext){
        const inititalProps = await Document.getInitialProps(ctx)
        return {
            ...inititalProps,
            styles: <>{inititalProps.styles}</>
        }
    }
    render() {
        return (
            <Html lang='es'>
                <Head>
                    { CssBaseline.flush() }
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument