import Control.Monad

foreign import javascript "Math.random()" js_random :: IO Double
foreign import javascript "console.log(${1})" js_print_double :: Double -> IO ()
foreign import javascript "new Date()" js_current_time :: IO JSRef
foreign import javascript "console.log(${1})" js_print :: JSRef -> IO ()

main :: IO ()
main = do
  replicateM_ 5 $ js_random >>= js_print_double
  js_current_time >>= js_print
