using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class goFWD : MonoBehaviour
{
    Animator m_animator;
    // Start is called before the first frame update
    void Start()
    {

        m_animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        bool moveFWDpressed = Input.GetKey("w");
        m_animator.SetBool("moveFWD", moveFWDpressed);

    }
}
