<?php

    function db_connect($host, $user, $pass, $db_server){
        return new mysqli($host, $user, $pass, $db_server);
    }


    function questao1() {
        $query = "select 
                        convenio.verba,
                        contrato.codigo,
                        contrato.data_inclusao,
                        contrato.valor,
                        contrato.prazo
                    from tb_convenio convenio
                    join tb_convenio_servico convenio_servico on convenio_servico.convenio = convenio.codigo
                    join tb_contrato contrato on contrato.convenio_servico = convenio_servico.codigo";
        return $this->db_connect->query($query);
    }

?>
