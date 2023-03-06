const Swal = require('sweetalert2')
const app = () => {
  GM_addStyle(`
        #swal2-title {
            text-align: center;
        }
    `)
  const params = {
    app: kintone.app.getId(),
    lang: 'user',
  }
  async function getFields() {
    const res = await kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params)
    return res
  }
  async function mainWork() {
    const objFields = await getFields()
    const eleCommonLabels: NodeListOf<HTMLElement> = document.querySelectorAll('.control-label-gaia, .group-label-gaia')
    let showCode: string
    let defaultBGColor: string
    for (let i = 0; i < eleCommonLabels.length; i += 1) {
      eleCommonLabels[i].style.cursor = 'copy'
      eleCommonLabels[i].onmouseover = () => {
        defaultBGColor = eleCommonLabels[i].style.backgroundColor
        eleCommonLabels[i].style.backgroundColor = '#f2b36f'
        Object.keys(objFields.properties).forEach((key) => {
          if (eleCommonLabels[i].innerText === objFields.properties[key].label) {
            showCode = objFields.properties[key].code
          }
        })
        Swal.fire({
          title: showCode,
          toast: true,
          position: 'top',
          showConfirmButton: false,
          width: 520,
          padding: `0em`,
          timer: 5000,
        })
      }
      eleCommonLabels[i].onmouseout = () => {
        Swal.close()
        eleCommonLabels[i].style.backgroundColor = defaultBGColor
      }
      eleCommonLabels[i].onclick = async () => {
        await navigator.clipboard.writeText(showCode)
        Swal.fire({
          title: `<span style="color:#129459">${showCode}</span><br>已拷贝至剪切板`,
          toast: true,
          position: 'top',
          showConfirmButton: false,
          width: 360,
          padding: `0em`,
          timer: 3000,
        })
        // }
      }
    }
  }

  async function modifyFieldCode() {
    const objFields = await getFields()
    const eleCommonLabels: NodeListOf<HTMLElement> = document.querySelectorAll('.control-label-gaia, .group-label-gaia')
    let showCode: string
    let defaultBGColor: string
    for (let i = 0; i < eleCommonLabels.length; i += 1) {
      eleCommonLabels[i].style.cursor = 'copy'
      eleCommonLabels[i].onmouseover = () => {
        defaultBGColor = eleCommonLabels[i].style.backgroundColor
        eleCommonLabels[i].style.backgroundColor = '#f2b36f'
      }
      //   Object.keys(objFields.properties).forEach((key) => {
      //     if (eleCommonLabels[i].innerText === objFields.properties[key].label) {
      //       showCode = objFields.properties[key].code
      //     }
      //   })
      //   Swal.fire({
      //     title: showCode,
      //     toast: true,
      //     position: 'top',
      //     showConfirmButton: false,
      //     width: 520,
      //     padding: `0em`,
      //     timer: 5000,
      //   })
      // }
      // eleCommonLabels[i].onmouseout = () => {
      //   Swal.close()
      //   eleCommonLabels[i].style.backgroundColor = defaultBGColor
      // }
      eleCommonLabels[i].onclick = async () => {
        Swal.fire({
          title: 'new field code',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off',
          },
          showCancelButton: true,
          confirmButtonText: 'modify',
          showLoaderOnConfirm: true,
          preConfirm: () => {
            console.log('click modify')
          },
          allowOutsideClick: () => !Swal.isLoading(),
          timer: 4000,
        })
      }
    }
  }
  kintone.events.on('app.record.detail.show', function (event) {
    mainWork()
    return event
  })

  kintone.events.on('app.record.edit.show', function (event) {
    modifyFieldCode()
    return event
  })
}

export default app
