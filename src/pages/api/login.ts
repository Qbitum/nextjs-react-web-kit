
export default (req: any, res: any) => {
    console.log("next api")
    setTimeout(() => {
        res.status(200).json({});
    }, 1000);
};