const statusRef = document.querySelector('.status');
const videoRef = document.querySelector('.video');

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");
        }, 2000);
        function getvideo(SubscriptionStatus){
            return new Promise((resolve,reject)=>{
                if (SubscriptionStatus === "VIP") {
                    resolve("show video");
                }
                else if (SubscriptionStatus === "FREE") {
                    resolve("show trailer");
                }
                else {
                    reject("no video");
                }

            })
        }
    })
}
async function main() {
    const status = (await getSubscriptionStatus());
    statusRef.innerHTML = status;
    try {
    console.log(await getVideo(status));
    }
    catch (e){
        console.log(e)
        videoRef.innerHTML = e;
    }
}
main();
